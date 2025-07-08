import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice.js';
import { Link, useRouteLoaderData, useNavigate } from 'react-router-dom';
import americanExpressLogo from '../assets/images/amercanexpress.png';
import applePayLogo from '../assets/images/applepay.png';
import masterCardLogo from '../assets/images/mastercard.png';
import payPalLogo from '../assets/images/paypal.png';
import visaCardLogo from '../assets/images/visacard.png';
import CartItem from './CartItem.jsx';
import { formatter } from '../util/helpers.js';

const cardLogoClasses =
  'w-full md:w-full h-full rounded-md border-2 border-stone-200 flex justify-center items-center';

export default function ShoppingCart() {
  const token = useRouteLoaderData('root');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const cartQuantity = cart.reduce(
    (total, curItem) => total + curItem.quantity,
    0
  );

  const cartTotalValue = cart.reduce(
    (total, curItem) => total + curItem.quantity * curItem.price,
    0
  );

  let shippingPrice = formatter.format(0);

  if (cartTotalValue > 0) {
    if (cartTotalValue > 150) {
      shippingPrice = 'free of charge';
    } else {
      shippingPrice = formatter.format(20);
    }
  }

  function handleOrder() {
    const orderData = {
      items: cart,
      total: cartTotalValue,
      time: new Date(),
      shippingPrice,
    };
    const prevOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...prevOrders, orderData]));
    dispatch(cartActions.clearCart());
    navigate('/success?event=order');
  }

  return (
    <main className="flex items-center flex-col uppercase grow text-xs sm:text-base">
      <div className="mt-4 lg:mt-24 w-2/3">
        <div className="flex justify-center gap-2 text-sm lg:text-2xl font-bold tracking-wider pb-2 lg:pb-4 border-b-stone-300 border-b-2 ">
          <h1>shopping cart</h1>
          <p>({cartQuantity})</p>
        </div>
      </div>

      <div className="flex flex-col grow lg:mt-16 w-full gap-4 lg:grid grid-cols-2 p-4 lg:p-0 lg:w-2/3 lg:grow-0 h-[50vh] items-center">
        {!cartQuantity && (
          <p className="lg:hidden text-center text-stone-500">
            NO ITEMS IN THE CART
          </p>
        )}
        <ul className="flex flex-col gap-8 lg:mt-0 overflow-y-auto lg:h-[50vh] sm:w-2/3 lg:w-full">
          {!cartQuantity && (
            <div className="items-center justify-center hidden lg:flex">
              <p className="text-stone-500">NO ITEMS IN THE CART</p>
            </div>
          )}
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
        <div className="mt-auto lg:mt-0">
          <div className="grid grid-cols-2">
            <p>DELIVERY COSTS</p>
            <p className="justify-self-end">{shippingPrice}</p>
            <p className="font-bold">TOTAL PRICE</p>
            <p className="justify-self-end font-bold">
              {formatter.format(cartTotalValue)}
            </p>
          </div>

          {token === 'EXPIRED' && (
            <Link
              to="/auth?mode=login"
              className="flex justify-center items-center w-full text-white bg-black text-xs tracking-wide mt-4 lg:mt-12 font-medium disabled:bg-stone-300 rounded-xs py-2 px-4 "
            >
              Please login before registering an order
            </Link>
          )}
          {token !== 'EXPIRED' && (
            <button
              onClick={handleOrder}
              disabled={!cartQuantity}
              className="w-full h-8 text-white bg-black text-sm tracking-wide mt-4 lg:mt-12 font-medium disabled:bg-stone-300 hover:cursor-pointer"
            >
              {cartQuantity > 0
                ? 'CASH REGISTER'
                : 'Please add some items to your cart first.'}
            </button>
          )}

          {/* LOGOS */}
          <div className="flex justify-between lg:justify-stretch gap-2 h-8  grayscale-100 mt-4">
            <div className={cardLogoClasses} title="American Express">
              <img
                src={americanExpressLogo}
                alt="American Express Logo"
                className="w-full sm:w-2/3"
              />
            </div>
            <div className={cardLogoClasses} title="Apple Pay">
              <img
                src={applePayLogo}
                alt="Apple Pay Logo"
                className="w-3/4 sm:w-3/5 md:w-1/2"
              />
            </div>
            <div className={cardLogoClasses} title="Master">
              <img
                src={masterCardLogo}
                alt="Mastercard Logo"
                className="w-2/5 sm:w-2/8"
              />
            </div>
            <div className={cardLogoClasses} title="Paypal">
              <img
                src={payPalLogo}
                alt="Paypal Logo"
                className="w-3/5 sm:w-1/2 md:w-2/5"
              />
            </div>
            <div className={cardLogoClasses} title="Visa">
              <img
                src={visaCardLogo}
                alt="Visa card Logo"
                className="w-2/5 sm:w-1/3 md:w-1/4"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
