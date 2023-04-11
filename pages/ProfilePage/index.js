import Profile from "../../components/Profile";

export default function ProfilePage({ formData, selectedSport }) {
  return <Profile selectedSport={selectedSport} formData={formData} />;
}
