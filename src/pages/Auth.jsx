import {
  redirect,
  useActionData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import AuthForm from '../components/AuthForm.jsx';
import { signup, login } from '../supabase.js';

export default function AuthPage() {
  const navigation = useNavigation();
  const resData = useActionData();
  const [searchParams] = useSearchParams('mode=login');
  const isSubmitting = navigation.state === 'submitting';
  const targetMode = searchParams.get('mode') === 'login' ? 'signup' : 'login';

  return (
    <AuthForm
      isSubmitting={isSubmitting}
      error={resData?.error?.message}
      targetMode={targetMode}
    />
  );
}

export async function action({ request }) {
  const mode = new URL(request.url).searchParams.get('mode');

  const formData = await request.formData();

  const userData = {
    email: formData.get('email'),
    password: formData.get('password'),
  };

  let response;
  if (mode === 'signup') {
    response = await signup(userData);
  } else {
    response = await login(userData);
  }

  if (response.error !== null) {
    if (
      response.error?.status === 400 &&
      response.error?.code !== 'invalid_credentials'
    ) {
      return {
        error: {
          message: 'Please check your email inbox and verify first.',
        },
      };
    }
    return response;
  }

  if (response.data.session !== null) {
    const session = response.data.session;
    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + session.expires_in);

    localStorage.setItem(
      'session',
      JSON.stringify({
        token: session.access_token,
        expires: expires.toISOString(),
      })
    );
  }

  if (mode === 'signup') {
    return redirect('/auth/success?event=signup');
  }

  return redirect('/');
}
