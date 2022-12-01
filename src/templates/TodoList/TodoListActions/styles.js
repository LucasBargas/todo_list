import styled from 'styled-components';

const TodoListActionsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  padding-top: .75rem;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  button {
    &:nth-of-type(${({ buttonActiveId }) => buttonActiveId}) {
      box-shadow: rgb(1, 4, 9) 0px 8px 12px;
      background: ${({ theme }) => theme.colors.greenColorHover};
    }

    @media (max-width: 480px) {
      max-width: 165px;
      margin: 0 auto;
    }

    @media (max-width: 300px) {
      max-width: 140px;
      margin: 0 auto;
    }
  }
`;

export default TodoListActionsContainer;
