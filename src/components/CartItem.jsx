import { useSelector, useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { formatter } from '../util/helpers.js';
export default function CartItem({ item }) {
  const { title, image, quantity, price } = item;
  const dispatch = useDispatch();
  const totalItemValue = quantity * price;

  function handleAdd() {
    dispatch(cartActions.addItem(item));
  }

  function handleDecrease() {
    dispatch(cartActions.deleteItem(item.id));
  }

  return (
    <li className="flex h-20 gap-4 justify-between">
      <div className="w-1/5">
        <img src={image} alt={title} className="h-full" />
      </div>
      <div className="grow flex justify-between gap-8 w-4/5">
        <ul className="flex flex-col gap-4">
          <li>{title}</li>
          <li className="flex gap-4">
            <p>QUANTITY</p>
            <div className="flex gap-1 items-center">
              <button className="hover:cursor-pointer" onClick={handleDecrease}>
                -
              </button>
              <span className="text-sm">{quantity}</span>
              <button className="hover:cursor-pointer" onClick={handleAdd}>
                +
              </button>
            </div>
          </li>
        </ul>
        <p>{formatter.format(totalItemValue)}</p>
      </div>
    </li>
  );
}
