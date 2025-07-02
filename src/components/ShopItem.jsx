import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice.js';
export default function ShopItem({ item }) {
  const { image, title, price, id } = item;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const curItem = cart.find((item) => item.id === id);
  const curItemQuantity = (curItem && curItem.quantity) || 0;

  function handleAdd(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cartActions.addItem(item));
  }

  function handleDecrease(e) {
    e.preventDefault();
    e.stopPropagation();
    dispatch(cartActions.deleteItem(item.id));
  }
  return (
    <li className="transition-all duration-100 hover:shadow-xl group">
      <Link to={String(id)}>
        <div className=" flex flex-col h-full">
          <div className="flex justify-center items-center grow">
            <img src={image} alt={title} className="w-1/3" />
          </div>
          <div className="mt-auto p-8">
            <p className="mb-4">{title}</p>
            <div className="flex justify-between">
              <p className="font-semibold text-xl">${price}</p>
              <div className="flex items-center gap-2 font-medium">
                <button
                  onClick={handleDecrease}
                  className={`text-2xl hidden ${
                    curItemQuantity ? 'group-hover:flex' : ''
                  } hover:cursor-pointer w-8 h-8 active:bg-stone-100 rounded-full justify-center items-center pb-0.5`}
                >
                  -
                </button>
                <p className="hidden group-hover:block">
                  {curItemQuantity > 0 && curItemQuantity}
                </p>
                <p className="block group-hover:hidden text-xl ">
                  {curItemQuantity > 0 && curItemQuantity + 'x'}
                </p>
                <button
                  onClick={handleAdd}
                  className="text-2xl hidden group-hover:flex hover:cursor-pointer w-8 h-8 active:bg-stone-100 rounded-full justify-center items-center pb-0.5"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
