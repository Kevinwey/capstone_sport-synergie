const sportsData = [
  { id: 1, name: "Swimming" },
  { id: 2, name: "Football" },
  { id: 3, name: "Basketball" },
  { id: 4, name: "Tennis" },
  { id: 5, name: "Volleyball" },
  { id: 6, name: "Golf" },
  { id: 7, name: "Rugby" },
  { id: 8, name: "Soccer" },
  { id: 9, name: "Crossfit" },
  { id: 10, name: "Bodybuilding" },
  { id: 11, name: "Cycling" },
  { id: 12, name: "Table tennis" },
  { id: 13, name: "Material arts" },
  { id: 14, name: "Gymnastics" },
];

const sortedSportsData = sportsData.sort((a, b) =>
  a.name.localeCompare(b.name)
);

export default sortedSportsData;
