import { createGlobalStyle } from 'styled-components';
import * as V from './Variables';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 375px) {
      font-size: 14px;
    }
  }

  body {
    background: ${V.PrimaryColor};
    color: ${V.LightColor};
    font-family: ${V.Roboto};

    button, input {
      outline: none;
      border: none;
    }

    button {
      cursor: pointer;
    }

    ul, li {
      list-style: none;
    }
  }
`;

export default GlobalStyles;
