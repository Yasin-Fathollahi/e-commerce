import { Form, useNavigate, Link } from 'react-router-dom';
import Input from '../components/UI/Input.jsx';

export default function AuthForm({ isSubmitting, error, targetMode }) {
  const navigate = useNavigate();
  function handleCancel(e) {
    e.preventDefault();
    navigate('/');
  }
  return (
    <main className="h-screen flex justify-center uppercase text-semibold">
      <div className="flex flex-col items-center mt-20 sm:w-2/3 sm:mt-24 lg:w-1/2 px-8">
        <h1 className="text-sm sm:text-lg lg:text-2xl font-bold tracking-wider pb-2 lg:pb-4 border-b-stone-300 border-b-2 text-center w-full">
          {targetMode === 'signup' ? 'login' : 'signup'}
        </h1>
        <Form
          method="POST"
          className="flex flex-col justify-between h-fit py-4 w-full sm:w-3/4 lg:p-8 lg:w-3/5"
        >
          <div className="flex flex-col gap-4">
            <Input type="email" id="email" label="email" />
            <Input type="password" id="password" label="password" />
            {error && (
              <div className="flex flex-col gap-2 text-sm font-semibold text-red-500">
                <p>{error}</p>
              </div>
            )}
          </div>
          <div className="flex justify-between mt-8">
            <div>{isSubmitting && <p>sending data...</p>}</div>
            <div className="flex gap-4">
              <button
                onClick={handleCancel}
                className=" hover:cursor-pointer hover:border-stone-900 py-2 px-4 rounded-sm text-md font-medium tracking-wider"
              >
                cancel
              </button>
              <button className="bg-black hover:cursor-pointer hover:bg-stone-900 text-white py-2 px-4 rounded-sm text-md font-medium tracking-wider">
                {targetMode === 'signup' ? 'login' : 'signup'}
              </button>
            </div>
          </div>
        </Form>
        <p className="text-xs sm:text-sm tracking-wide ">
          {targetMode === 'signup'
            ? "don't have an account?"
            : 'already have an account?'}{' '}
          <Link to={`?mode=${targetMode}`} className="font-bold">
            {targetMode}
          </Link>
        </p>
      </div>
    </main>
  );
}
