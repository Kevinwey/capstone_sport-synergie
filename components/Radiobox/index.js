export default function Radiobox({ name, label, type, checked, onChange }) {
  return (
    <div>
      <input
        id={label}
        name={name}
        type={type}
        checked={checked}
        onChange={onChange}
      ></input>
      <label aria-label={name} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
