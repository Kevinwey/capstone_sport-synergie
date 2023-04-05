import { useState } from "react";
import InputFields from "../InputFields";

export default function Form() {
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  function handleAgeChange(event) {
    setAge(event.target.value);
  }

  function handleHeightChange(event) {
    setHeight(event.target.value);
  }

  function handleWeightChange(event) {
    setWeight(event.target.value);
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

      <input id="slim" type="checkbox" name="slim"></input>
      <label aria-label="slim" htmlFor="slim">
        Slim
      </label>
      <input id="normal" type="checkbox" name="normal"></input>
      <label aria-label="normal" htmlFor="normal">
        Normal
      </label>
      <input id="Strong" type="checkbox" name="Strong"></input>
      <label aria-label="Strong" htmlFor="Strong">
        Strong
      </label>

      <h2>Fitness-Level</h2>

      <input id="unathletic" type="checkbox" name="unathletic"></input>
      <label aria-label="unathletic" htmlFor="unathletic">
        Unathletic
      </label>
      <input id="fit" type="checkbox" name="fit"></input>
      <label aria-label="fit" htmlFor="fit">
        Fit
      </label>
      <input id="muscular" type="checkbox" name="muscular"></input>
      <label aria-label="muscular" htmlFor="muscular">
        Muscular
      </label>

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
