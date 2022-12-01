import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    font-family: ${({ theme }) => theme.fonts.roboto};
    letter-spacing: 1px;

    button, input {
      outline: none;
      border: none;
      font-family: ${({ theme }) => theme.fonts.roboto};
      letter-spacing: 1px;
    }

    button {
      cursor: pointer;
      font-weight: 500;
    }

    ul, li {
      list-style: none;
    }

    svg, span {
      display: block;
    }
  }
`;

export default GlobalStyles;
