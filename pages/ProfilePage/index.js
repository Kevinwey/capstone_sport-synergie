import Profile from "../../components/Profile";

export default function ProfilePage({
  formData,
  selectedSport,
  level,
  count,
  sportsActive,
  onSelectSport,
  sportInfos,
}) {
  return (
    <Profile
      sportInfos={sportInfos}
      sportsActive={sportsActive}
      selectedSport={selectedSport}
      formData={formData}
      level={level}
      count={count}
      onSelectSport={onSelectSport}
    />
  );
}
