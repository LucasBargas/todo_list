import { createGlobalStyle, css } from 'styled-components';

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
    ${({ theme }) => css`
      background: ${theme.colors.PrimaryColor};
      color: ${theme.colors.LightColor};
      font-family: ${theme.fonts.Roboto};
    `}

    button, input {
      outline: none;
      border: none;
      ${({ theme }) => css`
      font-family: ${theme.fonts.Roboto};
    `}
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
