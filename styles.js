import { createGlobalStyle } from "styled-components";
import localfont from "@next/font/local";

const roboto = localfont({
  src: "/public/Roboto-flex.ttf",
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

:root {
  --font1: ${roboto.style.fontFamily}, system-ui;
  --1: #EEEEEE;
  --2: #E3F5FE;
  --3: #213553;
  --4: #393E46;
  --5: #222831;
  --6: #171B22;
}

  body {
    margin: 0;
    background-color: #F8F8FF;
    font-family: var(--font1);
  }
`;
