export default function OrderItem({ order, index }) {
  const { items, total, time, shippingPrice } = order;

  return (
    <li className="grid grid-cols-2">
      <ul>
        <h2>{index}</h2>
        {items.map((item) => (
          <li key={item.id} className="flex justify-between">
            <div>
              <img src={item.image} alt={item.title} className="w-1/4" />
            </div>
            <div>
              <p>{item.title}</p>
              <p>{item.quantity}</p>
              <p>{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      <div>
        <p>{time}</p>
        <p>{shippingPrice}</p>
        <p>{total}</p>
      </div>
    </li>
  );
}
