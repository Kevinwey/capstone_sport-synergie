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
  position: absolute;
  width: 375px;
  height: 40px;
  left: 0px;
  top: 0px;
  background-color: var(--4);
`;
