export default function OrdersPage() {
  return (
    <main className="flex justify-center mt-24 uppercase h-screen ">
      <div className="flex flex-col items-center gap-8 h-1/3 p-8 w-1/3">
        <h1 className="text-2xl font-bold tracking-wider pb-4 border-b-stone-300 border-b-2 w-full text-center">
          orders history
        </h1>
        <div>the previous orders go here</div>
      </div>
    </main>
  );
}
