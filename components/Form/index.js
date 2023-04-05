import { useState } from "react";
import InputFields from "../InputFields";
import Checkbox from "../Checkbox";
import SelectInput from "../SelectInput";

export default function Form() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [intensity, setIntensity] = useState("");
  const [category, setCategory] = useState("All");

  const [physique, setPhysique] = useState([
    { name: "Slim", checked: false },
    { name: "Normal", checked: false },
    { name: "Strong", checked: false },
  ]);
  const [fitnessLevel, setFitnessLevel] = useState([
    { name: "Unatheltic", checked: false },
    { name: "Fit", checked: false },
    { name: "Muscular", checked: false },
  ]);
  const [timePerWeek, setTimePerWeek] = useState([
    { name: "2-3x", checked: false },
    { name: "3-4x", checked: false },
    { name: "4+", checked: false },
  ]);
  const [preference, setPreference] = useState([
    { name: "Teamsport", checked: false },
    { name: "Individual sports", checked: false },
    { name: "Indoor", checked: false },
    { name: "Outdoor", checked: false },
  ]);

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
  }

  function handleIntensityChange(event) {
    setIntensity(event.target.value);
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

  function handleChange(type, name) {
    const stateVariables = {
      physique: [physique, setPhysique],
      fitnessLevel: [fitnessLevel, setFitnessLevel],
      timePerWeek: [timePerWeek, setTimePerWeek],
      preference: [preference, setPreference],
    };

    const [state, setState] = stateVariables[type];
    const newState = state.map((item) =>
      item.name === name ? { ...item, checked: !item.checked } : item
    );

    setState(newState);
  }

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
        onChange={handleAgeChange}
      />
      <InputFields
        label="Weight(kg):"
        type="text"
        name="weight"
        value={weight}
        onChange={handleWeightChange}
      />
      <InputFields
        label="Height(m):"
        type="text"
        name="height"
        value={height}
        onChange={handleHeightChange}
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
        value={intensity}
        onChange={handleIntensityChange}
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

      <SelectInput onChange={handleCategoryChange} />
      <p>Selected category: {category}</p>

      <button type="submit">Synergy</button>
    </form>
  );
}
