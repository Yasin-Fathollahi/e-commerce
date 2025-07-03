export default function Input({ type, label, id }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium tracking-wide">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="border-stone-300 border-2 p-2 rounded-sm"
        required
        minLength={type === 'password' ? 6 : undefined}
      />
    </div>
  );
}
