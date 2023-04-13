import Link from "next/link";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";

export default function Profile({ formData, selectedSport, level, count }) {
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

      <h3>Age:</h3>
      <StyledProfileInfos>{age}</StyledProfileInfos>

      <h3>Height:</h3>
      <StyledProfileInfos>{height}</StyledProfileInfos>

      <h3>Weight:</h3>
      <StyledProfileInfos>{weight}</StyledProfileInfos>

      <h3>Intensity:</h3>
      <StyledProfileInfos>{intensity}%</StyledProfileInfos>

      <h3>Physique:</h3>
      <StyledList>
        {physique.map(
          ({ name, checked }) => checked && <li key={name}>{name}</li>
        )}
      </StyledList>

      <h3>Fitness Level:</h3>
      <StyledList>
        {fitnessLevel.map(
          ({ name, checked }) => checked && <li key={name}>{name}</li>
        )}
      </StyledList>

      <h3>Time per week:</h3>
      <StyledList>
        {timePerWeek.map(
          ({ name, checked }) => checked && <li key={name}>{name}</li>
        )}
      </StyledList>

      <h3>My Sport</h3>
      <Link href={"/SportDetailsPage"}>
        <StyledProfileInfos>{selectedSport.name}</StyledProfileInfos>
      </Link>
      <q>{level}</q>
      <StyledCount>{count}</StyledCount>

      <StyledLink href={"/FormPage"}>MySettings</StyledLink>
    </StyledContainer>
  );
}

const StyledLink = styled(Link)`
  background-color: lightgrey;
  color: #0047ab;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  width: 150px;
  margin: 40px 10px;
  text-decoration: none;
  text-align: center;
`;

const StyledCount = styled.p`
  background: #f2f2f2;
  border: 2px solid #0047ab;
  border-radius: 50%;
  color: #0047ab;
  font-size: 2rem;
  height: 5rem;
  width: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  color: #0047ab;
  font-weight: bold;
`;

const StyledProfileInfos = styled.p`
  color: #0047ab;
  font-weight: bold;
  margin: 0;
`;
