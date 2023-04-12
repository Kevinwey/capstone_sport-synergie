import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import StyledButton from "../Layout/StyledButton";
import Link from "next/link";

export default function SportDetails({
  selectedSport,
  level,
  onDecrement,
  onIncrement,
}) {
  return (
    <StyledContainer>
      <StyledPageHeadline>{selectedSport.name}</StyledPageHeadline>
      <StyledSection>
        <StyledLevelButton onClick={onDecrement}>-</StyledLevelButton>
        <p>{level}</p>
        <StyledLevelButton onClick={onIncrement}>+</StyledLevelButton>
      </StyledSection>
      <h2>SportInvest</h2>
      <Link href={"/ProfilePage"}>
        <StyledBackButton>Back</StyledBackButton>
      </Link>
    </StyledContainer>
  );
}

const StyledLevelButton = styled.button`
  background: #f2f2f2;
  border: 1px solid #0047ab;
  border-radius: 50%;
  color: #0047ab;
  font-size: 1.5rem;
  font-weight: 700;
  height: 2rem;
  margin: 0 0.5rem;
  width: 2rem;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const StyledBackButton = styled(StyledButton)`
  margin: 1rem 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
