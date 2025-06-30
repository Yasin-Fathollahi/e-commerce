import { useRouteError } from 'react-router-dom';
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <main className=" text-white h-screen flex flex-col justify-center items-center bg-gray-900 gap-4 pb-44">
      <h2 className="text-4xl">An error occured!</h2>
      <p className="text-2xl">{error.message}</p>
    </main>
  );
}
