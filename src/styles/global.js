import { createGlobalStyle } from 'styled-components';

import BrandonBld from 'fonts/brandon/brandon-bold.woff2';
import BrandonReg from 'fonts/brandon/brandon-regular.woff2';
import BrandonLte from 'fonts/brandon/brandon-light.woff2';

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0px;
    padding: 0px;
    outline: none;
    font-size: 10px;
    background: #f6f9fc;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: "Brandon Bld";
    src: url(${BrandonBld});
  }

  @font-face {
    font-family: "Brandon Reg";
    src: url(${BrandonReg});
  }

  @font-face {
    font-family: "Brandon Lte";
    src: url(${BrandonLte});
  }
`;

export default GlobalStyles;
