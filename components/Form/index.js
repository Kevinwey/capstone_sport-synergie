import { useState } from "react";
import InputFields from "../InputFields";
import Checkbox from "../Checkbox";

export default function Form() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [physique, setPhysique] = useState([
    { name: "slim", checked: false },
    { name: "normal", checked: false },
    { name: "strong", checked: false },
  ]);
  const [fitnessLevel, setFitnessLevel] = useState([
    { name: "unatheltic", checked: false },
    { name: "fit", checked: false },
    { name: "muscular", checked: false },
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

  function handleChange(type, name) {
    if (type === "physique") {
      const newPhysique = physique.map((item) =>
        item.name === name ? { ...item, checked: !item.checked } : item
      );
      setPhysique(newPhysique);
    } else if (type === "fitnessLevel") {
      const newFitnessLevel = fitnessLevel.map((item) =>
        item.name === name ? { ...item, checked: !item.checked } : item
      );
      setFitnessLevel(newFitnessLevel);
    }
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

      <input
        id="twoToThreeTimes"
        type="checkbox"
        name="twoToThreeTimes"
      ></input>
      <label aria-label="twoToThreeTimes" htmlFor="twoToThreeTimes">
        2-3x
      </label>
      <input
        id="threeToFourTimes"
        type="checkbox"
        name="threeToFourTimes"
      ></input>
      <label aria-label="threeToFourTimes" htmlFor="threeToFourTimes">
        3-4x
      </label>
      <input
        id="fourOrMoreTimes"
        type="checkbox"
        name="fourOrMoreTimes"
      ></input>
      <label aria-label="fourOrMoreTimes" htmlFor="fourOrMoreTimes">
        4+
      </label>

      <h2>Intensity</h2>

      <div>20%</div>
      <input step={1} min={20} type="range" max={90} name="intensity"></input>
      <div>90%</div>

      <h2>Preference</h2>

      <input id="Teamsport" type="checkbox" name="Teamsport"></input>
      <label aria-label="Teamsport" htmlFor="Teamsport">
        Teamsport
      </label>
      <input
        id="individualSports"
        type="checkbox"
        name="individualSports"
      ></input>
      <label aria-label="individualSports" htmlFor="individualSports">
        Individual sports
      </label>

      <input id="Indoor" type="checkbox" name="Indoor"></input>
      <label aria-label="Indoor" htmlFor="Indoor">
        Indoor
      </label>
      <input id="Outdoor" type="checkbox" name="Outdoor"></input>
      <label aria-label="Outdoor" htmlFor="Outdoor">
        Outdoor
      </label>
      <label htmlFor="category">Category</label>
      <select id="category" name="category" placeholder="category">
        <option value="combatSports">Combat sports</option>
        <option value="enduranceSports">Endurance sports</option>
        <option value="waterSports">Water sports</option>
        <option value="extremeSports">Extreme sports</option>
        <option value="allCategorys" selected>
          All
        </option>
      </select>

      <button type="submit">Synergy</button>
    </form>
  );
}
