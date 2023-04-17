import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import Link from "next/link";

export default function SportDetails({
  selectedSport,
  level,
  onDecrement,
  onIncrement,
  count,
  showCount,
  onInvestClick,
  showAside,
}) {
  return (
    <StyledContainer>
      <StyledPageHeadline>{selectedSport.attributes.name}</StyledPageHeadline>
      <StyledSection>
        <StyledLevelButton type="button" onClick={onDecrement}>
          -
        </StyledLevelButton>
        <p>{level}</p>
        <StyledLevelButton type="button" onClick={onIncrement}>
          +
        </StyledLevelButton>
      </StyledSection>
      <h2>SportInvest</h2>
      <StyledInvestbutton
        type="button"
        showAside={showAside}
        onClick={onInvestClick}
      >
        {showCount ? count : "GO!"}
      </StyledInvestbutton>
      {showAside && (
        <StyledAside>
          Hey, slow down there champ! Your muscles need time to regenerate after
          a tough workout.
        </StyledAside>
      )}

      <StyledLink href={"/ProfilePage"}>Back</StyledLink>
    </StyledContainer>
  );
}

const StyledLink = styled(Link)`
  background-color: lightgrey;
  color: #0047ab;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  width: 150px;
  margin: 40px 10px;
  text-decoration: none;
  text-align: center;
`;

const StyledInvestbutton = styled.button`
  background: #f2f2f2;
  border: 2px solid #0047ab;
  border-radius: 50%;
  color: #0047ab;
  font-size: 3rem;
  height: 8rem;
  width: 8rem;
  opacity: ${(props) => (props.showAside ? 0.5 : 1)};
  transition: opacity 0.5s ease-in-out;
  position: relative;
  z-index: ${(props) => (props.showAside ? 1 : "auto")};
`;

const StyledAside = styled.aside`
  background: #f2f2f2;
  border: 2px solid #0047ab;
  color: #0047ab;
  font-size: 1.5rem;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

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
  margin: 3rem 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
