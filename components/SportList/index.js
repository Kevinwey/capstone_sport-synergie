import StyledPageHeadline from "../Layout/StyledPageHeadline";
import styled from "styled-components";
import Link from "next/link";
import StyledButton from "../Layout/StyledButton";

export default function SportList({
  sports,
  selectedSport,
  onSelectSport,
  onNewRoll,
}) {
  return (
    <StyledSportContainer>
      <StyledPageHeadline>Sports</StyledPageHeadline>

      {sports.map((sport) => (
        <StyledSelectButton
          type="button"
          key={sport.id}
          selected={sport === selectedSport}
          onClick={() => onSelectSport(sport)}
        >
          {sport.attributes?.name}
        </StyledSelectButton>
      ))}

      {selectedSport && (
        <StyledDescription>
          {selectedSport.attributes?.description}
        </StyledDescription>
      )}

      <StyledButtonContainer>
        <StyledButton onClick={onNewRoll}>NewRoll</StyledButton>
        <StyledLink href={"/ProfilePage"}>Start!</StyledLink>
      </StyledButtonContainer>
    </StyledSportContainer>
  );
}

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

const StyledSelectButton = styled.button`
  background-color: ${(props) => (props.selected ? "var(--3)" : "var(--1)")};
  color: ${(props) => (props.selected ? "var(--1)" : "black")};
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  font-size: 1.2rem;
  width: 200px;
  box-shadow: var(--shadow2);
`;

const StyledSportContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledDescription = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  text-align: center;
  color: var(--1);
  width: 300px;
  border: 3px dotted grey;
  border-radius: 1rem;
  padding: 10px;
  margin: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
`;
