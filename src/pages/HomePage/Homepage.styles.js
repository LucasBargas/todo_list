import styled, { css } from "styled-components";

export const TodoListContainer = styled.section`
  width: 100%;
  max-width: calc(690px + 2rem);
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export const TodoListArea = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.SecondaryColor};
    border: 1px solid ${theme.colors.BorderColor};
  `}
  padding: 1.5rem 3rem;
  box-shadow: 0 8px 24px #010409;
  border-radius: 6px;

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }

  h2 {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 500;
    ${({ theme }) => css`
      color: ${theme.colors.LightColor};
    `}
  }
`;