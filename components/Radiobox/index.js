export default function Radiobox({ name, label, type, checked, onChange }) {
  return name === "fitnessLevel" ? (
    <div>
      <label aria-label={name} htmlFor={name}>
        {label}
      </label>
      <input
        id={label}
        name={name}
        type={type}
        checked={checked}
        onChange={onChange}
      ></input>
    </div>
  ) : (
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
