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
  'w-18 h-full rounded-md border-2 border-stone-200 flex justify-center items-center';

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
    <main className="flex items-center flex-col uppercase">
      <div className="mt-24 w-2/3">
        <div className="flex gap-2 justify-center font-bold tracking-wider pb-4 border-b-stone-300 border-solid border-b-2">
          <h1>shopping cart</h1>
          <p>({cartQuantity})</p>
        </div>
      </div>

      <div className="grid grid-cols-2 mt-16 gap-14 w-2/3">
        <ul className="flex flex-col gap-4">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </ul>
        <div>
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
              className="flex justify-center items-center w-full h-8 text-white bg-black text-sm tracking-wide mt-12 font-medium disabled:bg-stone-300 rounded-xs"
            >
              Please login before registering your order
            </Link>
          )}
          {token !== 'EXPIRED' && (
            <button
              onClick={handleOrder}
              disabled={!cartQuantity}
              className="w-full h-8 text-white bg-black text-sm tracking-wide mt-12 font-medium disabled:bg-stone-300 hover:cursor-pointer"
            >
              {cartQuantity > 0
                ? 'CASH REGISTER'
                : 'Please add some items to your cart first.'}
            </button>
          )}

          {/* LOGOS */}
          <div className="flex gap-2 h-8  grayscale-100 mt-4">
            <div className={cardLogoClasses} title="American Express">
              <img
                src={americanExpressLogo}
                alt="American Express Logo"
                className="w-full"
              />
            </div>
            <div className={cardLogoClasses} title="Apple Pay">
              <img src={applePayLogo} alt="Apple Pay Logo" className="w-3/4" />
            </div>
            <div className={cardLogoClasses} title="Master">
              <img
                src={masterCardLogo}
                alt="Mastercard Logo"
                className="w-2/5"
              />
            </div>
            <div className={cardLogoClasses} title="Paypal">
              <img src={payPalLogo} alt="Paypal Logo" className="w-3/5" />
            </div>
            <div className={cardLogoClasses} title="Visa">
              <img src={visaCardLogo} alt="Visa card Logo" className="w-2/5" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
