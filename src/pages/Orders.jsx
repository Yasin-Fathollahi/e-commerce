import OrderItem from '../components/OrderItem.jsx';
export default function OrdersPage() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];

  return (
    <main className="flex justify-center mt-24 uppercase h-screen ">
      <div className="flex flex-col items-center gap-8 h-1/3 p-8 w-1/2">
        <h1 className="text-2xl font-bold tracking-wider pb-4 border-b-stone-300 border-b-2 w-full text-center">
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
      </div>
    </main>
  );
}

export async function loader() {}
