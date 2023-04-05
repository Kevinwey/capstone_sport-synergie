import Link from "next/link";
import StyledButton from "../Layout/StyledButton";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";

export default function Profile({ formData }) {
  const {
    age,
    height,
    weight,
    intensity,
    physique,
    fitnessLevel,
    timePerWeek,
  } = formData;

  return (
    <StyledContainer>
      <StyledPageHeadline>MyProfile</StyledPageHeadline>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Height:</strong> {height}
      </p>
      <p>
        <strong>Weight:</strong> {weight}
      </p>
      <p>
        <strong>Intensity:</strong> {intensity}%
      </p>

      <p>
        <strong>Physique:</strong>
      </p>
      <StyledList>
        {physique.map(
          ({ name, checked }) => checked && <li key={name}>{name}</li>
        )}
      </StyledList>

      <p>
        <strong>Fitness Level:</strong>
      </p>
      <StyledList>
        {fitnessLevel.map(
          ({ name, checked }) => checked && <li key={name}>{name}</li>
        )}
      </StyledList>

      <p>
        <strong>Time per week:</strong>
      </p>
      <StyledList>
        {timePerWeek.map(
          ({ name, checked }) => checked && <li key={name}>{name}</li>
        )}
      </StyledList>

      <Link href={"/FormPage"}>
        <StyledButton>MySettings</StyledButton>
      </Link>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  list-style: none;
  text-align: center;
  margin: 0 auto;
  padding: 0;
`;

const StyledDetails = styled.p`
  font-size: 1.2rem;
`;
