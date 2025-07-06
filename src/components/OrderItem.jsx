import { formatter, dateFormatter } from '../util/helpers.js';
import PurchasedItem from './PurchasedItem.jsx';
export default function OrderItem({ order, index }) {
  const { items, total, time, shippingPrice } = order;
  const orderTime = new Date(time);

  return (
    <li className="border-b-stone-300 border-b-2 pt-8 text-xs sm:text-sm md:text-lg">
      <div className="grid grid-cols-2 mb-8">
        <div className="flex items-center">
          <p className="font-semibold text-center">order info</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>Order number: {index}</p>
          <p>Date: {dateFormatter.format(orderTime)}</p>
          <p>shipping: {shippingPrice}</p>
          <p>Total: {formatter.format(total)}</p>
        </div>
      </div>

      <ul>
        {items.map((item) => (
          <PurchasedItem key={item.id} item={item} />
        ))}
      </ul>
    </li>
  );
}
