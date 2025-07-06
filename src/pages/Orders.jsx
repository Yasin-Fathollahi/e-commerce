import { Form } from 'react-router-dom';
import OrderItem from '../components/OrderItem.jsx';
export default function OrdersPage() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <main className="uppercase h-screen">
      <div className="flex flex-col items-center  h-1/3 p-8">
        <h1 className="text-md lg:text-xl font-bold tracking-wider pb-4 border-b-stone-300 border-b-2 w-full text-center">
          orders history
        </h1>
        <ul>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <OrderItem key={order.time} order={order} index={index + 1} />
            ))
          ) : (
            <p className="text">No orders to show.</p>
          )}
        </ul>
        <Form action="/logout" method="post" className="mt-8">
          <button className="text-xs md:text-xl font-bold bg-stone-950 hover:bg-red-500 hover:cursor-pointer tracking-wider uppercase  py-2 px-4 rounded-sm text-white">
            logout
          </button>
        </Form>
      </div>
    </main>
  );
}

export async function loader() {}
