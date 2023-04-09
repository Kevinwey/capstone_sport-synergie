export default function SelectInput({ onChange }) {
  return (
    <div>
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        placeholder="category"
        onChange={onChange}
      >
        <option value="Combat sports">Combat sports</option>
        <option value="Endurance sports">Endurance sports</option>
        <option value="Water sports">Water sports</option>
        <option value="Extreme sports">Extreme sports</option>
        <option value="All">All</option>
      </select>
    </div>
  );
}
