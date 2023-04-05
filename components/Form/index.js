import InputFields from "../InputFields";
import Checkbox from "../Checkbox";
import SelectInput from "../SelectInput";

export default function Form({ formData, handleChange, onChange }) {
  const {
    age,
    height,
    weight,
    intensity,
    category,
    preference,
    physique,
    fitnessLevel,
    timePerWeek,
  } = formData;

  return (
    <form aria-labelledby="user-details">
      <legend>
        <h2>Please enter your details here!</h2>
      </legend>
      <InputFields
        label="Age:"
        type="text"
        name="age"
        value={age}
        onChange={onChange}
      />
      <InputFields
        label="Weight(kg):"
        type="text"
        name="weight"
        value={weight}
        onChange={onChange}
      />
      <InputFields
        label="Height(m):"
        type="text"
        name="height"
        value={height}
        onChange={onChange}
      />

      <h2>Physique</h2>

      {physique.map(({ name, checked }) => (
        <Checkbox
          key={name}
          label={name}
          checked={checked}
          onChange={() => handleChange("physique", name)}
        />
      ))}

      <h2>Fitness-Level</h2>

      {fitnessLevel.map(({ name, checked }) => (
        <Checkbox
          key={name}
          label={name}
          checked={checked}
          onChange={() => handleChange("fitnessLevel", name)}
        />
      ))}

      <h2>Time per week</h2>

      {timePerWeek.map(({ name, checked }) => (
        <Checkbox
          key={name}
          label={name}
          checked={checked}
          onChange={() => handleChange("timePerWeek", name)}
        />
      ))}

      <h2>Intensity</h2>

      <input
        step={5}
        type="range"
        min={20}
        max={90}
        name="intensity"
        value={intensity}
        onChange={onChange}
      />
      <div>{intensity}%</div>

      <h2>Preference</h2>

      {preference.map(({ name, checked }) => (
        <Checkbox
          key={name}
          label={name}
          checked={checked}
          onChange={() => handleChange("preference", name)}
        />
      ))}

      <SelectInput onChange={onChange} />
      <p>Selected category: {category}</p>

      <button type="submit">Synergy</button>
    </form>
  );
}
