import styled, { css } from "styled-components";

export const CreateTaskContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.BorderColor};
  `}
`;

export const CreateTaskForm = styled.form`
  button {
    margin-top: .75rem;
  }
`;