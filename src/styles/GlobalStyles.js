import { createGlobalStyle } from 'styled-components';

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
    background: ${({ theme }) => theme.colors.PrimaryColor};
    color: ${({ theme }) => theme.colors.LightColor};
    font-family: ${({ theme }) => theme.fonts.Roboto};

    button, input {
      outline: none;
      border: none;
      font-family: ${({ theme }) => theme.fonts.Roboto};
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
