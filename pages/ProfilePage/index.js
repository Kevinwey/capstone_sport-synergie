import Profile from "../../components/Profile";

export default function ProfilePage({ formData, selectedSport, level, count }) {
  return (
    <Profile
      selectedSport={selectedSport}
      formData={formData}
      level={level}
      count={count}
    />
  );
}
