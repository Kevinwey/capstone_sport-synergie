import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import Radiobox from "../Radiobox";
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
  const { intensity, physique, fitnessLevel, timePerWeek } = formData;

  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    router.push("/SelectorPage");
  }

  return (
    <StyledForm aria-labelledby="user-details" onSubmit={handleSubmit}>
      <legend>
        <StyledPageHeadline>Settings</StyledPageHeadline>
      </legend>

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

      <StyledFitnesslevelContainer>
        <h2>Fitness-Level</h2>
        <StyledFitnesslevelbox>
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
        </StyledFitnesslevelbox>
      </StyledFitnesslevelContainer>

      <StyledTimeContainer>
        <h2>Time per week</h2>
        <StyledTimeBox>
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
        </StyledTimeBox>
      </StyledTimeContainer>

      <StyledIntensityContainer>
        <h2>Intensity</h2>
        <StyledIntensityInput>
          <input
            step={5}
            type="range"
            min={20}
            max={90}
            name="intensity"
            value={intensity}
            onChange={onChange}
          />
          <StyledOutput>{intensity}%</StyledOutput>
        </StyledIntensityInput>
      </StyledIntensityContainer>

      <StyledCategoryContainer>
        <h2>Category</h2>
        <StyledCategorySelect>
          <select
            required
            multiple
            value={selectedGroups}
            onChange={onSelectChange}
          >
            {filteredGroups.map((group) => (
              <option key={group.id} value={group.id}>
                {group.attributes.name}
              </option>
            ))}
          </select>
        </StyledCategorySelect>
      </StyledCategoryContainer>

      <StyledSynergyButton type="submit" onClick={onNewRoll}>
        Synergy
      </StyledSynergyButton>
    </StyledForm>
  );
}

const StyledSynergyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px;
  position: relative;
  bottom: 20px;
  width: 150px;
  height: 50px;
  font-size: 1.5rem;
  font-weight: 700;
  border-radius: 10px;
  background: var(--3);
  color: var(--1);
  border: none;
  box-shadow: var(--shadow2);
`;

const StyledCategorySelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 80%;
  height: 117px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;

  select {
    width: 100%;
    height: 100%;
    background: var(--4);
    color: var(--2);
    border: none;
    text-align: center;
    font-family: var(--font1);

    &:focus {
      outline: none;
    }
  }
  option {
    font-weight: 700;
    padding: 2.5px;
    &:checked {
      background: var(--4);
      color: var(--3);
    }
  }
`;

const StyledCategoryContainer = styled.section`
  width: 340px;
  height: 120px;
  margin-top: 20px;
  background: #393e46;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 22px;

  h2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: -16px 0 0 0;
    color: var(--1);
    text-shadow: var(--shadow1);
    font-weight: 600;
    font-family: var(--font1);
    font-size: 1.2rem;
  }
`;

const StyledOutput = styled.output`
  line-height: 21px;
  font-family: var(--font1);
  position: absolute;
  margin-top: 50px;
  right: 50%;
  transform: translateX(50%);
  width: 40px;
  height: 20px;
`;

const StyledIntensityInput = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 80%;
  height: 80px;
  margin: 0 auto;
  text-align: center;
  font-family: var(--font1);
  color: var(--2);
  font-weight: 490;
  font-size: 14px;
  input {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 33px;
    appearance: none;
    width: 227px;
    cursor: pointer;
    outline: none;
    background: var(--2);
    border-radius: 10px;
    height: 10px;
  }
  input::-webkit-slider-thumb {
    appearance: none;
    width: 20px;
    height: 20px;
    background-color: var(--5);
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid var(--6);
  }
`;

const StyledIntensityContainer = styled.section`
  display: flex;
  width: 340px;
  height: 11%;
  margin-top: 20px;
  background: #393e46;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  h2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: -16px 0 0 0;
    color: var(--1);
    text-shadow: var(--shadow1);
    font-weight: 600;
    font-family: var(--font1);
    font-size: 1.2rem;
  }
`;

const StyledTimeBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  width: 80%;
  margin: 0 auto;
  text-align: center;
  font-family: var(--font1);
  color: var(--2);
  font-weight: 490;
  font-size: 14px;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55px;
    gap: 25px;
  }
`;

const StyledTimeContainer = styled.section`
  display: flex;
  width: 340px;
  height: 9%;
  margin-top: 170px;
  background: #393e46;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  h2 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: -16px 0 0 0;
    color: var(--1);
    text-shadow: var(--shadow1);
    font-weight: 600;
    font-family: var(--font1);
    font-size: 1.2rem;
  }
`;

const StyledFitnesslevelbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
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

const StyledFitnesslevelContainer = styled.section`
  position: absolute;
  width: 48%;
  height: 123px;
  right: 0px;
  top: 145px;

  background: #393e46;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 22px 0px 0px 22px;
  h2 {
    position: absolute;
    text-align: center;
    top: -16px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    width: 176px;
    color: var(--1);
    text-shadow: var(--shadow1);
    font-weight: 600;
    font-family: var(--font1);
    font-size: 1.2rem;
  }
`;

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
  width: 48%;
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
