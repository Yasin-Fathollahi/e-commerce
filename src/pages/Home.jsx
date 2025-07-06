import heroImg from '../assets/images/hero2.jpg';
import MainNavigation from '../components/MainNavigation.jsx';
// #CBB26A
export default function HomePage() {
  return (
    <header className="h-screen flex flex-col font-playfair">
      <p className="text-center text-white bg-stone-950 py-1 text-xs sm:tracking-widest lg:text-lg tracking-wider">
        Enjoy free shipping over $150
      </p>
      <div
        className="grow-1 bg-cover bg-center flex flex-col"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <MainNavigation />
        <div className="text-center uppercase flex flex-col grow-1 justify-center mb-24 sm:mb-0">
          <h1 className="text-4xl font-bold tracking-[0.35em] mb-4 sm:text-5xl md:text-6xl lg:text-9xl lg:font-semibold lg:tracking-[0.6em] lg:mb-8  text-white">
            castellion
          </h1>
          <p className="text-sm sm:text-md md:text-lg lg:text-3xl tracking-wide sm:tracking-wider lg:tracking-widest font-md text-white">
            If You Can Think It, We Might Sell It
          </p>
        </div>
      </div>
    </header>
  );
}
