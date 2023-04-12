import SportDetails from "../../components/SportDetails";

export default function SportDetailsPage({
  selectedSport,
  level,
  onDecrement,
  onIncrement,
}) {
  return (
    <SportDetails
      selectedSport={selectedSport}
      level={level}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
    />
  );
}
