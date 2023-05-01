import Link from "next/link";
import styled from "styled-components";

export default function HomeButton() {
  return (
    <section>
      <StylesHomeHeadline>SportSynergy</StylesHomeHeadline>
      <StyledLink href={"/FormPage"}>GO!</StyledLink>
    </section>
  );
}

const StylesHomeHeadline = styled.h1`
  position: absolute;
  top: -40px;
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-family: var(--font1);
  color: var(--2);
  background-color: var(--4);
  z-index: 2;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 3px outset #888;
  padding: 10px;
  width: 200px;
  height: 200px;
  color: var(--1);
  text-transform: uppercase;
  letter-spacing: 4px;
  overflow: hidden;
  box-shadow: 0 0 10px rgb(0, 0, 0, 1);
  font-size: 60px;
  text-decoration: none;
  background: var(--4);
  text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  transition: 0.2s;
  &:focus {
    border: 3px outset #ddd;
    color: var(--1);
    background: var(--3);
    text-shadow: 0px 0px 4px #ccc;
    box-shadow: 0 0 10px var(--1), 0 0 40px var(--1), 0 0 80px var(--1);
  }
`;
