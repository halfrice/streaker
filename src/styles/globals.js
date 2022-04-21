import { createGlobalStyle } from "styled-components"
import variables from "./variables"

const GlobalStyles = createGlobalStyle`
  ${variables};

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    font-weight: 400;
    background-color: var(--white);
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: deeppink;
    font-weight: 600;
  }
`
export default GlobalStyles
