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
        <StyledLevelContainer>
          <StyledLevel>{level}</StyledLevel>
        </StyledLevelContainer>
        <StyledLevelButton type="button" onClick={onIncrement}>
          +
        </StyledLevelButton>
      </StyledSection>
      <StyledHeadline>SportInvest</StyledHeadline>
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

const StyledHeadline = styled.h2`
  color: var(--1);
`;

const StyledLevelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
`;

const StyledLevel = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0 1rem;
  color: var(--1);
`;

const StyledLink = styled(Link)`
  background-color: var(--3);
  color: var(--1);
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-size: 1.5rem;
  width: 150px;
  margin: 40px 10px;
  text-decoration: none;
  text-align: center;
  box-shadow: var(--shadow2);
`;

const StyledInvestbutton = styled.button`
  background: var(--4);
  border: 2px solid none;
  border-radius: 50%;
  color: var(--1);
  font-size: 48px;
  height: 150px;
  width: 150px;
  opacity: ${(props) => (props.showAside ? 0.5 : 1)};
  transition: opacity 0.5s ease-in-out;
  position: relative;
  z-index: ${(props) => (props.showAside ? 1 : "auto")};
  box-shadow: var(--shadow2);
`;

const StyledAside = styled.aside`
  background: var(--4);
  border: none;
  color: var(--1);
  font-size: 24px;
  padding: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  box-shadow: var(--shadow2);
  border-radius: 10px;
  width: 300px;
`;

const StyledLevelButton = styled.button`
  background: var(--4);
  border: 1px solid var(--1);
  border-radius: 50%;
  color: var(--1);
  font-size: 22px;
  height: 2rem;
  margin: 0 0.5rem;
  width: 2rem;
`;

const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px;
  padding: 5px;
  background-color: var(--4);
  border-radius: 15px;
  box-shadow: var(--shadow2);
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
