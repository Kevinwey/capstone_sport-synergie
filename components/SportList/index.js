import React, { useState, useEffect } from "react";
import sportsData from "../../lib/sports";
import StyledPageHeadline from "../Layout/StyledPageHeadline";
import StyledSportsList from "./StyledSportsList";
import Link from "next/link";
import StyledButton from "../Layout/StyledButton";

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
      <StyledPageHeadline>Sports</StyledPageHeadline>
      <StyledSportsList>
        {sports.map((sport) => (
          <li key={sport.id}>{sport.name}</li>
        ))}
        <Link href={"/ProfilePage"}>
          <StyledButton>MyProfile</StyledButton>
        </Link>
      </StyledSportsList>
    </div>
  );
}
