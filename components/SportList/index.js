import React from "react";
import sportsData from "../../lib/sports";

export default function SportList() {
  return (
    <div>
      <h1>Sports</h1>
      <ul>
        {sportsData.map((sport) => (
          <li key={sport.id}>{sport.name}</li>
        ))}
      </ul>
    </div>
  );
}
