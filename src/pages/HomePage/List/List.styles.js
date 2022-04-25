import styled, { keyframes } from 'styled-components';

const animationList = keyframes`
  to {
    opacity: 1;
  }
`;

export const ListContainer = styled.div`
  padding-top: 1.25rem;

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.LightColor};
  }
`;

export const ButtonsFilter = styled.div`
  padding-top: .75rem;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 414px) {
    gap: 1rem;
  }

  @media (max-width: 380px) {
    flex-direction: column;
  }

  button {
    &.active {
      box-shadow: 0 8px 12px #010409;
      background: ${({ theme }) => theme.colors.GreenColorHover};

      @media (max-width: 380px) {
        box-shadow: 0 12px 20px #010409;
      }
    }

    &:disabled {
      cursor: no-drop;

      &:hover {
        background: ${({ theme }) => theme.colors.GreenColor};
      }
    }
  }
`;

export const TasksContainer = styled.ul`
  padding-top: 2rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: .5rem;
    opacity: 0;
    padding: .5rem 1rem;
    border: 1px solid ${({ theme }) => theme.colors.BorderColor};

    &:not(:last-of-type) {
      margin-bottom: .75rem;
    }

    span, input {
      display: inline-block;
    }

    input {
      margin: 0 .5rem;
    }
  }

  li, p {
    opacity: 0;
    animation: ${animationList} forwards .4s;
  }
`;

export const TaskButtons = styled.div`
  display: flex;
  align-items: center;
  opacity: 0;
  animation: ${animationList} forwards .4s;

  button {
    background: transparent;
    padding: .5rem .5rem;
    color: ${({ theme }) => theme.colors.GreenColor};
  }
`;

export const NoTasks = styled.span`
  font-weight: 500;
`;

export const HandleAllTasks = styled.div`
  padding-top: 1.75rem;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 414px) {
    flex-direction: column;
    gap: .75rem;
  }
`;

export const DoneError = styled.p`
  font-size: .875rem;
  font-family: 500;
`;
