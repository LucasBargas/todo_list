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
`;

export const TasksContainer = styled.ul`
  padding-top: 2rem;

  li {
    opacity: 0;
    padding: .5rem 1rem;
    animation: ${animationList} forwards .4s;
    ${({ theme }) => css`
      border: 1px solid ${theme.colors.BorderColor};
    `}

    &:not(:last-of-type) {
      margin-bottom: .75rem;
    }
  }
`;