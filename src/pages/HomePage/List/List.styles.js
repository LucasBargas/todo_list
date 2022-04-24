import styled, { css } from 'styled-components';

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