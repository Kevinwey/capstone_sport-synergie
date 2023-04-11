import InputFields from "../InputFields";
import SelectInput from "../SelectInput";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import StyledButton from "../Layout/StyledButton";
import Radiobox from "../Radiobox";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Form({ formData, onChange, handleChange }) {
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

  const router = useRouter();
  const [errors, setErrors] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    let newErrors = [];

    if (Number(age) < 12 || Number(age) > 99) {
      newErrors.push("Please enter a age between 12 and 99.");
    }
    if (Number(weight) < 30 || Number(weight) > 180) {
      newErrors.push("Please enter a weight between 30kg and 180kg.");
    }
    if (Number(height) < 60 || Number(height) > 220) {
      newErrors.push("Please enter a height between 60cm and 220cm.");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      event.target.reset();
      router.push("/SelectorPage");
    }
  }

  return (
    <StyledForm aria-labelledby="user-details" onSubmit={handleSubmit}>
      <legend>
        <StyledPageHeadline>MySettings</StyledPageHeadline>
      </legend>

      <InputFields
        label="Age*:"
        type="number"
        name="age"
        value={age}
        onChange={onChange}
        required
      />
      <InputFields
        label="Weight(kg)*:"
        type="number"
        name="weight"
        value={weight}
        onChange={onChange}
        required
      />
      <InputFields
        label="Height(cm)*:"
        type="number"
        name="height"
        value={height}
        onChange={onChange}
        required
      />

      <h2>Physique</h2>

      {physique.map(({ name, checked }) => (
        <Radiobox
          key={name}
          name={"physique"}
          type="checkbox"
          label={name}
          checked={checked}
          onChange={() => handleChange("physique", name)}
        />
      ))}

      <h2>Fitness-Level</h2>

      {fitnessLevel.map(({ name, checked }) => (
        <Radiobox
          key={name}
          name={"fitnessLevel"}
          type="checkbox"
          label={name}
          checked={checked}
          onChange={() => handleChange("fitnessLevel", name)}
        />
      ))}

      <h2>Time per week</h2>

      {timePerWeek.map(({ name, checked }) => (
        <Radiobox
          key={name}
          label={name}
          type="checkbox"
          name={"timesPerWeek"}
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
        <Radiobox
          name={"preference"}
          type="checkbox"
          key={name}
          label={name}
          checked={checked}
          onChange={() => handleChange("preference", name)}
        />
      ))}

      <SelectInput onChange={onChange} />
      <p>Selected category: {category}</p>

      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <StyledError key={error}>{error}</StyledError>
          ))}
        </ul>
      )}

      <StyledButton type="submit">Synergy</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const StyledError = styled.li`
  color: red;
  list-style: none;
  }
`;
