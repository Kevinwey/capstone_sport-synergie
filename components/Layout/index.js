import StyledAppHeadline from "./StyledAppHeadline";
import styled from "styled-components";

export default function Layout() {
  return (
    <StyledAppHeadlineContainer>
      <StyledAppHeadline>SportSynergy</StyledAppHeadline>
    </StyledAppHeadlineContainer>
  );
}

const StyledAppHeadlineContainer = styled.div`
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 40px;
  background-color: var(--4);
`;
