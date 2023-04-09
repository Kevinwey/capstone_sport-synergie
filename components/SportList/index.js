import React, { useState, useEffect } from "react";
import sportsData from "../../lib/sports";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import Link from "next/link";
import StyledButton from "../Layout/StyledButton";

export default function SportList() {
  const [sports, setSports] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);

  useEffect(() => {
    setSports(getRandomSports());
  }, []);

  function getRandomSports() {
    const randomSports = sportsData
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);
    return randomSports;
  }

  sports.sort((a, b) => a.name.localeCompare(b.name));

  function handleSelectSport(sport) {
    setSelectedSport(sport);
  }

  function handleNewRoll() {
    setSports(getRandomSports());
    setSelectedSport(null);
  }

  return (
    <StyledSportContainer>
      <StyledPageHeadline>Sports</StyledPageHeadline>

      {sports.map((sport) => (
        <StyledSelectButton
          type="button"
          key={sport.id}
          selected={sport === selectedSport}
          onClick={() => handleSelectSport(sport)}
        >
          {sport.name}
        </StyledSelectButton>
      ))}

      {selectedSport && (
        <StyledDescription>{selectedSport.description}</StyledDescription>
      )}

      <StyledButtonContainer>
        <StyledButton onClick={handleNewRoll}>NewRoll</StyledButton>
        <Link href={"/ProfilePage"}>
          <StyledButton>Start!</StyledButton>
        </Link>
      </StyledButtonContainer>
    </StyledSportContainer>
  );
}

const StyledSelectButton = styled.button`
  background-color: ${(props) => (props.selected ? "lightgrey" : "#F8F8FF")};
  color: ${(props) => (props.selected ? "#0047AB" : "black")};
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  width: 200px;
  cursor: pointer;
`;

const StyledSportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledDescription = styled.p`
  font-size: 1.2rem;
  margin: 10px;
  text-align: center;
  width: 300px;
  color: #0047ab;
  height: 210px;
  border: 1px dotted black;
  border-radius: 10px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
`;
