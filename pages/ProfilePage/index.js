import Profile from "../../components/Profile";

export default function ProfilePage({ formData, selectedSport, level }) {
  return (
    <Profile selectedSport={selectedSport} formData={formData} level={level} />
  );
}
