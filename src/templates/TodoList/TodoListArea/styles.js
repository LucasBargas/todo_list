import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  to {
    opacity: 1;
  }
`;

export const TodoListAreaContainer = styled.div`
  padding-top: 2rem;

  p {
    opacity: 0;
    animation: ${animation} forwards .4s;
  }
`;

export const TodoListAreaWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: ${animation} forwards .4s;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .75rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.borderColor};

    @media (max-width: 300px) {
      flex-direction: column;
      align-items: flex-start;
      gap: .325rem;
    }

    &:not(:last-of-type) {
      margin-bottom: .75rem;
    }

    span {
      font-weight: 500;
      
      &.done {
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.greenColor};
      }
    }
  }
`;

export const TodoListAreaActions = styled.ul`
  display: flex;
  align-items: center;
  gap: .5rem;

  @media (max-width: 300px) {
    gap: .5rem;
  }

  li {
    border: none;
    padding: 0;
    margin: 0 !important;

    button {
      cursor: pointer;
      background: transparent;
      padding: .325rem;
      font-size: 1.125rem;
      color: ${({ theme }) => theme.colors.greenColor};
    }
  }
`;

export const TodoListDestructiveButtons = styled.div`
  padding-top: 1rem;
  display: flex;
  gap: 1rem;
`;
