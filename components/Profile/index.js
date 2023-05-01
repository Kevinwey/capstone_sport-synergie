import Link from "next/link";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";

export default function Profile({
  formData,
  selectedSport,
  level,
  count,
  sportsActive,
  onSelectSport,
  sportInfos,
}) {
  const { physique, fitnessLevel } = formData;

  return (
    <StyledContainer>
      <StyledPageHeadline>Profile</StyledPageHeadline>
      {sportsActive.map((sport) => (
        <>
          {sport.attributes.name !== selectedSport.attributes?.name && (
            <StyledSelectButton
              key={sport.id}
              onClick={() => onSelectSport(sport)}
            >
              {sport.attributes.name}
            </StyledSelectButton>
          )}
          {sport.attributes?.name === selectedSport.attributes?.name && (
            <StyledSportContainer>
              {selectedSport && (
                <StyledSportName>{sport.attributes.name}</StyledSportName>
              )}

              <StyledIntensity>{`${
                sportInfos[sport.attributes.name].intensity
              }%`}</StyledIntensity>

              <StyledTime>
                {sportInfos[sport.attributes.name].timePerWeek}
              </StyledTime>

              <StyledLevel>{level}</StyledLevel>
              <StyledCount>{count}</StyledCount>
            </StyledSportContainer>
          )}
        </>
      ))}

      <StyledBodyContainer>
        <StyledList>
          {physique.map(
            ({ name, checked }) => checked && <li key={name}>{name}</li>
          )}
        </StyledList>

        <StyledList>
          {fitnessLevel.map(
            ({ name, checked }) => checked && <li key={name}>{name}</li>
          )}
        </StyledList>
      </StyledBodyContainer>
      <StyledLinkContainer>
        <StyledLink href={"/SportDetailsPage"}>MySport</StyledLink>
        <StyledLink href={"/FormPage"}>AddSport</StyledLink>
      </StyledLinkContainer>
    </StyledContainer>
  );
}

const StyledSelectButton = styled.button`
  background-color: ${(props) => (props.selected ? "var(--3)" : "var(--1)")};
  color: ${(props) => (props.selected ? "var(--1)" : "black")};
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  width: 200px;
  box-shadow: var(--shadow2);
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledBodyContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 300px;
  background-color: var(--4);
  border-radius: 10px;
  margin: 20px auto;
  padding: 2px;
  align-items: center;
  justify-content: center;
  justify-content: space-around;
  box-shadow: var(--shadow2);
`;

const StyledSportContainer = styled.div`
  position: relative;
`;

const StyledLevel = styled.p`
  position: absolute;
  top: 215px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: var(--1);
  font-weight: 700;
`;

const StyledSportName = styled.p`
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  color: var(--1);
  font-weight: 700;
`;

const StyledIntensity = styled.p`
  position: absolute;
  top: 115px;
  left: -20px;
  font-size: 20px;
  color: var(--1);
  font-weight: 700;
`;

const StyledTime = styled.ul`
  position: absolute;
  top: 115px;
  right: -20px;
  font-size: 20px;
  list-style: none;
  color: var(--1);
  font-weight: 700;
`;

const StyledLink = styled(Link)`
  background-color: var(--3);
  color: var(--1);
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  width: 150px;
  margin: 40px 10px;
  text-decoration: none;
  text-align: center;
  box-shadow: var(--shadow2);
`;

const StyledCount = styled.p`
  background: var(--4);
  border: 2px solid none;
  border-radius: 50%;
  color: var(--1);
  font-size: 48px;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow2);
  font-weight: 700;
`;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledList = styled.ul`
  font-size: 18px;
  list-style: none;
  color: var(--1);
  font-weight: 700;
  margin: 0;
  padding: 5px;
`;

{
  /* <h3>Age:</h3>
      <StyledProfileInfos>{age}</StyledProfileInfos>
      <h3>Height:</h3>
      <StyledProfileInfos>{height}</StyledProfileInfos>
      <h3>Weight:</h3>
      <StyledProfileInfos>{weight}</StyledProfileInfos> */
}
