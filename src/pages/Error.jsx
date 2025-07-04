import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation.jsx';
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <MainNavigation />
      <main className=" text-white h-screen flex flex-col justify-center items-center gap-4 pb-44">
        <div className="bg-red-600/55 w-2/3 h-fit p-8 flex flex-col gap-8 rounded-md">
          <h2 className="text-4xl">An error occured!</h2>
          <p className="text-2xl">{error.data || error.message}</p>
        </div>
      </main>
    </>
  );
}
