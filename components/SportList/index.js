import React from "react";
import sortedSportsData from "../../lib/sports";

export default function SportList() {
  return (
    <div>
      <h1>Sports</h1>
      <ul>
        {sortedSportsData.map((sport) => (
          <li key={sport.id}>{sport.name}</li>
        ))}
      </ul>
    </div>
  );
}
