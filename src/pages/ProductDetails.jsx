import { useLoaderData } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice.js';
export default function ProductDetailsPage() {
  const item = useLoaderData();
  const { image, title, price, description, id } = item;
  const cart = useSelector((state) => state.cart);
  const alreadyInCart = cart.find((item) => item.id === id);

  const dispatch = useDispatch();
  function handleAdd() {
    dispatch(cartActions.addItem(item));
  }
  return (
    <main className="grid grid-cols-2 h-screen">
      <div className="flex justify-center items-center">
        <img src={image} alt={title} className="w-1/3" />
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">{title}</h2>
          <p className="text-xl font-medium">${price}</p>
          <p className="text-sm w-2/3 text-stone-600">{description}</p>
          <button
            disabled={alreadyInCart}
            onClick={handleAdd}
            className={`w-fit ${
              !alreadyInCart ? 'underline' : undefined
            } hover:cursor-pointer font-medium uppercase disabled:text-stone-400 disabled:hover:cursor-default no-underline) `}
          >
            {alreadyInCart ? 'Item is added to cart' : 'ADD TO CART'}
          </button>
        </div>
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
