import { Form } from 'react-router-dom';
import OrderItem from '../components/OrderItem.jsx';
export default function OrdersPage() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <main className="uppercase grow flex flex-col">
      <div className="flex flex-col items-center px-8 pt-8 grow h-[90vh]">
        <h1 className="text-md lg:text-xl font-bold tracking-wider pb-4 border-b-stone-300 border-b-2 w-full text-center">
          orders history
        </h1>
        <ul className="overflow-y-auto grow">
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <OrderItem key={order.time} order={order} index={index + 1} />
            ))
          ) : (
            <p className="text">No orders to show.</p>
          )}
        </ul>
        <Form action="/logout" method="post" className="my-4">
          <button className="text-xs md:text-xl font-bold bg-stone-950 hover:bg-red-500 hover:cursor-pointer tracking-wider uppercase  py-2 px-4 rounded-sm text-white">
            logout
          </button>
        </Form>
      </div>
    </main>
  );
}

export async function loader() {}
