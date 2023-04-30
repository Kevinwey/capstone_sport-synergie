import Link from "next/link";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import { useState } from "react";

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

  const [showDescription, setShowDescription] = useState({
    intensity: false,
    time: false,
    level: false,
    sport: false,
    fitnessLevel: false,
    physique: false,
    name: false,
  });

  function handleClick(value) {
    setShowDescription({
      ...showDescription,
      [value]: !showDescription[value],
    });
  }

  return (
    <StyledContainer>
      <StyledPageHeadline>Profile</StyledPageHeadline>
      <StyledSportContainer>
        {selectedSport && (
          <StyledSportName onClick={() => handleClick("name")}>
            {showDescription.name ? "Sport" : selectedSport.attributes.name}
          </StyledSportName>
        )}

        <StyledIntensity onClick={() => handleClick("intensity")}>
          {showDescription.intensity ? "Intensity" : `${intensity}%`}
        </StyledIntensity>

        <StyledTime onClick={() => handleClick("time")}>
          {showDescription.time
            ? "Times"
            : timePerWeek.map(
                ({ name, checked }) => checked && <li key={name}>{name}</li>
              )}
        </StyledTime>

        <StyledLevel onClick={() => handleClick("level")}>
          {showDescription.level ? "Level" : level}
        </StyledLevel>
        <StyledCount>{count}</StyledCount>
      </StyledSportContainer>

      <StyledBodyContainer>
        <StyledList onClick={() => handleClick("physique")}>
          {showDescription.physique
            ? "Physique"
            : physique.map(
                ({ name, checked }) => checked && <li key={name}>{name}</li>
              )}
        </StyledList>

        <StyledList onClick={() => handleClick("fitnesslevel")}>
          {showDescription.fitnesslevel
            ? "FitnessLevel"
            : fitnessLevel.map(
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
