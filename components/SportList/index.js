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

  return (
    <StyledContainer>
      <StyledPageHeadline>Sports</StyledPageHeadline>

      {sports.map((sport) => (
        <StyledSelectButton
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

      <Link href={"/ProfilePage"}>
        <StyledButton>MyProfile</StyledButton>
      </Link>
    </StyledContainer>
  );
}

const StyledSelectButton = styled.button`
  background-color: ${(props) => (props.selected ? "grey" : "white")};
  color: ${(props) => (props.selected ? "blue" : "black")};
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  width: 200px;
  cursor: pointer;
`;

const StyledContainer = styled.div`
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
  color: grey;
  height: 180px;
  border: 1px dotted black;
  border-radius: 10px;
`;
