import SportList from "../../components/SportList";

export default function SelectorPage({
  sports,
  selectedSport,
  onSelectSport,
  onNewRoll,
  onAddSport,
  sportsActive,
}) {
  return (
    <>
      <SportList
        sportsActive={sportsActive}
        onAddSport={onAddSport}
        sports={sports}
        selectedSport={selectedSport}
        onNewRoll={onNewRoll}
        onSelectSport={onSelectSport}
      />
    </>
  );
}
