import React, { useState, useEffect } from "react";
import sportsData from "../../lib/sports";

export default function SportList() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    setSports(getRandomSports());
  }, []);

  function getRandomSports() {
    const randomSports = sportsData.sort(() => Math.random() - 0.5).slice(0, 3);
    return randomSports;
  }

  sports.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      <h1>Sports</h1>
      <ul>
        {sports.map((sport) => (
          <li key={sport.id}>{sport.name}</li>
        ))}
      </ul>
    </div>
  );
}
