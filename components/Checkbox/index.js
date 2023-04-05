export default function Checkbox({ name, label, checked, onChange }) {
  return (
    <div>
      <input
        id={label}
        name={name}
        type="radio"
        checked={checked}
        onChange={onChange}
      ></input>
      <label aria-label={name} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
