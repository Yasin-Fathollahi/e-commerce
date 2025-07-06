import { useEffect, useState } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
export default function SuccessPage() {
  const [timer, setTimer] = useState(5);
  const [searchParams] = useSearchParams();
  const event = searchParams.get('event');
  const destination = event === 'order' ? '/orders' : '/auth?mode=login';
  const navigate = useNavigate();
  useEffect(() => {
    const shownTimer = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      navigate(destination);
    }, 5000);

    return () => {
      clearInterval(shownTimer);
      clearTimeout(redirectTimer);
    };
  }, []);

  let content;
  if (event === 'order') {
    content = (
      <>
        <h1 className="font-semibold text-4xl mb-4 uppercase">
          Purchase successful❤️
        </h1>
        <p className="font-bold text-2xl">You'll be redirected in {timer}</p>
        <div className="mx-auto bg-black py-2 px-8 w-fit rounded-lg mt-8">
          <Link
            to={destination}
            className="text-xl text-white  font-bold hover:underline "
          >
            See my orders
          </Link>
        </div>
      </>
    );
  } else {
    content = (
      <>
        <h1 className="font-semibold text-4xl mb-4 uppercase">Success!</h1>
        <p className="font-bold text-2xl">You'll be redirected in {timer}</p>

        <p>Please check your email and verify then login.</p>
        <p>
          Note: If you already had an account nothing has happened please try to
          login.
        </p>

        <div className="mx-auto bg-black py-2 px-8 w-fit rounded-lg mt-8">
          <Link
            to={destination}
            className="text-xl text-white  font-bold hover:underline "
          >
            login
          </Link>
        </div>
      </>
    );
  }

  return (
    <main className="flex justify-center items-center h-screen">
      <div className="text-center bg-green-700/65 p-8 rounded-xl mb-48 h-fit">
        {content}
      </div>
    </main>
  );
}
