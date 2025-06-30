import heroImg from '../assets/images/hero2.jpg';
import MainNavigation from '../components/MainNavigation.jsx';
// #CBB26A
export default function HomePage() {
  return (
    <div className="h-screen flex flex-col font-playfair">
      <p className="text-center text-white bg-stone-950 py-1 text-lg">
        Enjoy free shipping over 150 &dollar;
      </p>
      <main
        className="grow-1 bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <MainNavigation />
        <div className=" flex justify-center items-center grow-1">
          <h1 className="text-9xl text-white tracking-[0.6em] font-semibold mb-32">
            CASTELLION
          </h1>
        </div>
      </main>
    </div>
  );
}
