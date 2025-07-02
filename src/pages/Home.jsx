import heroImg from '../assets/images/hero2.jpg';
import MainNavigation from '../components/MainNavigation.jsx';
// #CBB26A
export default function HomePage() {
  return (
    <header className="h-screen flex flex-col font-playfair">
      <p className="text-center text-white bg-stone-950 py-1 text-lg">
        Enjoy free shipping over $150
      </p>
      <div
        className="grow-1 bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <MainNavigation homePageActive />
        <div className=" flex justify-center items-center grow-1 uppercase">
          <div>
            <h1 className="text-9xl text-white tracking-[0.6em] font-semibold mb-8">
              castellion
            </h1>
            <p className="text-white text-center text-3xl tracking-widest font-md">
              If You Can Think It, We Might Sell It
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
