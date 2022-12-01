import styled from 'styled-components';

export const TodoListCreateContainer = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media(max-width: 400px) {
    padding: .75rem;
  }
`;

export const TodoListCreateForm = styled.form`
  button {
    margin-top: .75rem;
  }
`;
