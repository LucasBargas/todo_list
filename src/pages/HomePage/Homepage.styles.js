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

  form {
    input, button {
      display: block;
      width: 100%;
    }
  }
`;