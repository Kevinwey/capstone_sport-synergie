import SportDetails from "../../components/SportDetails";

export default function SportDetailsPage({
  selectedSport,
  level,
  onDecrement,
  onIncrement,
  count,
  showCount,
  onInvestClick,
}) {
  return (
    <SportDetails
      selectedSport={selectedSport}
      level={level}
      onDecrement={onDecrement}
      onIncrement={onIncrement}
      count={count}
      showCount={showCount}
      onInvestClick={onInvestClick}
    />
  );
}
