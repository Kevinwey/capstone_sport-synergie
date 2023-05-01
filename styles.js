import { createGlobalStyle } from "styled-components";
import localfont from "@next/font/local";

const exo = localfont({
  src: "/public/exo.ttf",
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  --font1: ${exo.style.fontFamily}, system-ui;
  --1: #EEEEEE;
  --2: #E3F5FE;
  --3: #213553;
  --4: #393E46;
  --5: #222831;
  --6: #171B22;
  --7: #EEE9DA;
  --shadow1: 0px 1px 1px rgba(0, 0, 0, 0.5);
  --shadow2: 0px 3px 3px rgba(0, 0, 0, 0.25); 
}

  body {
    margin: 0;
    overflow-x: hidden;
    background-color: var(--5);
    font-family: var(--font1);
  }
`;
