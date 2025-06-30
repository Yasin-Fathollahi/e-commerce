import { useLoaderData } from 'react-router-dom';
import ShopItem from '../components/ShopItem.jsx';
export default function ShopPage() {
  const items = useLoaderData();

  return (
    <main className="p-8">
      <ul className="grid grid-cols-4 gap-y-8">
        {items.map((item) => (
          <ShopItem key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
}

export async function loader() {
  const response = await fetch('https://fakestoreapi.com/products');

  if (response.status === 400) console.log(response);

  if (!response.ok) {
    throw new Response(
      { message: 'Failed to fetch the shop.' },
      {
        status: 500,
      }
    );
  }

  return response;
}
