export default function InputFields({ name, label, type, value, onChange }) {
  return (
    <div>
      <label aria-label={name} htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
