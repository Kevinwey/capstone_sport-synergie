import StyledHomeButton from "./StyledHomeButton";
import StyledHomeButtonContainer from "./StyledHomeButtonContainer";
import Link from "next/link";

export default function HomeButton() {
  return (
    <StyledHomeButtonContainer>
      <Link href={"/FormPage"}>
        <StyledHomeButton>GO!</StyledHomeButton>
      </Link>
    </StyledHomeButtonContainer>
  );
}
