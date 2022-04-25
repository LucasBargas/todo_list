import styled, { css, keyframes } from 'styled-components';

const animationList = keyframes`
  to {
    opacity: 1;
  }
`;

export const ListContainer = styled.div`
  padding-top: 1.25rem;

  h3 {
    text-align: center;
    ${({ theme }) => css`
      color: ${theme.colors.LightColor};
    `}
  }
`;

export const ButtonsFilter = styled.div`
  padding-top: .75rem;
  display: flex;
  gap: 1.5rem;

  button {
    &.active {
      ${({ theme }) => css`
        background: ${theme.colors.GreenColorHover};
      `}
        box-shadow: 0 8px 12px #010409;
    }

    &:disabled {
      cursor: no-drop;

      &:hover {
        ${({ theme }) => css`
          background: ${theme.colors.GreenColor};
        `}
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
    opacity: 0;
    padding: .5rem 1rem;
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.BorderColor};
    `}

    &:not(:last-of-type) {
      margin-bottom: .75rem;
    }

    span {
      display: inline-block;
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
  gap: .5rem;
  opacity: 0;
  animation: ${animationList} forwards .4s;

  button {
    background: transparent;
    ${({ theme }) => css`
      color: ${theme.colors.GreenColor};
    `}
  }
`;

export const NoTasks = styled.span`
  font-weight: 500;
`;

export const HandleAllTasks = styled.div`
  padding-top: 1.75rem;
  display: flex;
  gap: 1.5rem
`;

export const DoneError = styled.p`
  font-size: .875rem;
  font-family: 500;
`;
