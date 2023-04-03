import React, { useState, useEffect } from "react";
import sportsData from "../../lib/sports";
import StyledSportsHeadline from "../SportList/StyledSportsHeadline";
import StyledSportsList from "./StyledSportsList";

export default function SportList() {
  const [sports, setSports] = useState([]);

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

  return (
    <div>
      <StyledSportsHeadline>Sports</StyledSportsHeadline>
      <StyledSportsList>
        {sports.map((sport) => (
          <li key={sport.id}>{sport.name}</li>
        ))}
      </StyledSportsList>
    </div>
  );
}
