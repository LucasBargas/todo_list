import styled from "styled-components";

export const CreateTaskContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.BorderColor};
`;

export const CreateTaskForm = styled.form`
  button {
    margin-top: .75rem;
  }

  p {
    margin-top: .25rem;
    font-size: .75rem;
  }
`;