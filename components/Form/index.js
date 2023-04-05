import InputFields from "../InputFields";
import SelectInput from "../SelectInput";
import Link from "next/link";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import StyledButton from "../Layout/StyledButton";
import Radiobox from "../Radiobox";

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
    <StyledForm aria-labelledby="user-details">
      <legend>
        <StyledPageHeadline>MySettings</StyledPageHeadline>
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
        label="Height(cm):"
        type="text"
        name="height"
        value={height}
        onChange={onChange}
      />

      <h2>Physique</h2>

      {physique.map(({ name, checked }) => (
        <Radiobox
          key={name}
          name={"physique"}
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
          key={name}
          label={name}
          checked={checked}
          onChange={() => handleChange("preference", name)}
        />
      ))}

      <SelectInput onChange={onChange} />
      <p>Selected category: {category}</p>

      <Link href={"/SelectorPage"}>
        <StyledButton type="submit">Synergy</StyledButton>
      </Link>
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
