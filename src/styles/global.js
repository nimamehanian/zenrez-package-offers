import { createGlobalStyle } from 'styled-components';
import { $white, $text1 } from 'styles/colors';

import ApercuMed from 'fonts/apercu/apercu-med.woff2';
import ApercuReg from 'fonts/apercu/apercu-reg.woff2';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 16px;
    font-family: "Apercu Reg";
    background: ${$white};
    color: ${$text1};
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "Apercu Med";
    src: url(${ApercuMed});
  }

  @font-face {
    font-family: "Apercu Reg";
    src: url(${ApercuReg});
  }
`;

export default GlobalStyles;
