import { useEffect } from 'react';
import { Outlet, useSubmit, useLoaderData } from 'react-router-dom';
import { getTokenDuration } from '../util/auth';
export default function RootLayout() {
  const submit = useSubmit();
  const token = useLoaderData();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === 'EXPIRED') {
      submit(null, { action: '/logout', method: 'post' });
      return;
    }

    const duration = getTokenDuration();

    setTimeout(() => {
      submit(null, { action: '/logout', method: 'post' });
    }, duration);
  }, [token, submit]);

  return <Outlet />;
}
