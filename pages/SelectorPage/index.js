import SportList from "../../components/SportList";

export default function SelectorPage({
  sports,
  selectedSport,
  onSelectSport,
  onNewRoll,
}) {
  return (
    <>
      <SportList
        sports={sports}
        selectedSport={selectedSport}
        onNewRoll={onNewRoll}
        onSelectSport={onSelectSport}
      />
    </>
  );
}
