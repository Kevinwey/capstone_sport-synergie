import InputFields from "../InputFields";
import SelectInput from "../SelectInput";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import StyledButton from "../Layout/StyledButton";
import Radiobox from "../Radiobox";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Form({
  formData,
  onChange,
  handleChange,
  onSelectChange,
  selectedGroups,
  filteredGroups,
  onNewRoll,
}) {
  const {
    age,
    height,
    weight,
    intensity,
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
      <StyledPhysiqueContainer>
        <h2>Physique</h2>
        <StyledRadioBoxContainer>
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
        </StyledRadioBoxContainer>
      </StyledPhysiqueContainer>

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

      <select multiple value={selectedGroups} onChange={onSelectChange}>
        {filteredGroups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.attributes.name}
          </option>
        ))}
      </select>

      {errors.length > 0 && (
        <ul>
          {errors.map((error) => (
            <StyledError key={error}>{error}</StyledError>
          ))}
        </ul>
      )}

      <StyledButton type="submit" onClick={onNewRoll}>
        Synergy
      </StyledButton>
    </StyledForm>
  );
}

const StyledRadioBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font1);
  color: var(--2);
  font-weight: 490;
  font-size: 14px;
  div {
    display: flex;
    gap: 25px;
  }
`;

const StyledPhysiqueContainer = styled.section`
  position: absolute;
  width: 47%;
  height: 123px;
  left: 0px;
  top: 145px;

  background: #393e46;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0px 22px 22px 0px;
  h2 {
    position: absolute;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    color: var(--1);
    text-shadow: var(--shadow1);
    font-weight: 600;
    font-family: var(--font1);
    font-size: 1.2rem;
  }
`;

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
`;
