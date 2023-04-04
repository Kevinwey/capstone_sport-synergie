import Link from "next/link";

export default function ProfileButton() {
  return (
    <Link href={"/ProfilePage"}>
      <button>MyProfile</button>
    </Link>
  );
}
