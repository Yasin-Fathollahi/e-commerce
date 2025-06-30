import { Link } from 'react-router-dom';
export default function ShopItem({ item }) {
  const { image, title, price, id } = item;

  return (
    <li className="transition-all duration-100 hover:shadow-xl">
      <Link to={String(id)}>
        <div className=" flex flex-col h-full">
          <div className="flex justify-center items-center grow">
            <img src={image} alt={title} className="w-1/3" />
          </div>
          <div className="text-center mt-auto">
            <p>{title}</p>
            <p className="font-semibold">{price} &euro;</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
