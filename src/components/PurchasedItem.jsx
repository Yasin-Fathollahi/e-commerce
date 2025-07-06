import { formatter, titleFormatter } from '../util/helpers.js';
export default function PurchasedItem({ item }) {
  const { image, title, quantity, price } = item;
  return (
    <li className="grid grid-cols-2 mb-6">
      <div>
        <img src={image} alt={title} className="w-2/5 sm:w-1/4 lg:w-1/8" />
      </div>
      <div>
        <p className="sm:hidden">{titleFormatter(title, 3)}</p>
        <p className="hidden sm:block">
          {title} ({quantity})
        </p>

        <p>{formatter.format(price)}</p>
      </div>
    </li>
  );
}
