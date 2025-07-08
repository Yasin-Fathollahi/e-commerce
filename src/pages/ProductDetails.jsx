import { useLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice.js';
export default function ProductDetailsPage() {
  const item = useLoaderData();
  const { image, title, price, description, id } = item;
  const cart = useSelector((state) => state.cart);
  const alreadyInCart = cart.find((item) => item.id === id);
  const buttonClasses =
    'hover:cursor-pointer font-medium uppercase disabled:hover:cursor-default no-underline) w-full h-8 text-white bg-black text-sm tracking-wide disabled:bg-stone-300 mt-auto sm:mt-0';

  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(cartActions.addItem(item));
  }
  return (
    <main className=" flex justify-center grow">
      <div className="flex flex-col sm:grid grid-cols-2 sm:w-4/5 ">
        <div className="flex justify-center items-center my-14 sm:my-0 ">
          <img src={image} alt={title} className="w-1/3 sm:w-1/2 lg:w-1/4" />
        </div>
        <div className="flex items-center p-8 sm:p-0">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl lg:text-3xl">{title}</h1>
            <p className="text-xl font-medium">${price}</p>
            <p className="text-sm sm:w-2/3 text-stone-600">{description}</p>
            <button
              disabled={alreadyInCart}
              onClick={handleAdd}
              className={buttonClasses + ' hidden sm:inline-block'}
            >
              {alreadyInCart ? 'Item is added to cart' : 'ADD TO CART'}
            </button>
          </div>
        </div>
        <button
          disabled={alreadyInCart}
          onClick={handleAdd}
          className={buttonClasses + ' sm:hidden'}
        >
          {' '}
          {alreadyInCart ? 'Item is added to cart' : 'ADD TO CART'}
        </button>
      </div>
    </main>
  );
}

export async function loader({ params }) {
  const id = params.productId;
  const response = await fetch('https://fakestoreapi.com/products/' + id);

  if (response.status === 400) {
    return response.json();
  }

  if (!response.ok) {
    throw new Response(
      { message: 'Failed to fetch product details.' },
      {
        status: 500,
      }
    );
  }

  return response;
}

// (

/* 


category: "men's clothing"
description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
id: 1
image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
price: 109.95
rating: {rate: 3.9, count: 120}
title "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"


*/
