export default function Checkbox({ name, label, checked, onChange }) {
  return (
    <div>
      <input
        id={name}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      ></input>
      <label aria-label={name} htmlFor={name}>
        {label}
      </label>
    </div>
  );
}
