export default function Input({ type, placeholder, handlerFn }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input"
      onKeyUp={handlerFn}
    />
  );
}
