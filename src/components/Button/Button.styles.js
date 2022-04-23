import styled, { css } from 'styled-components';

const DefaultButton = styled.button`
  display: block;
  background: ${({ bg }) => bg};
  width: ${({ width }) => width};
  padding: 5px 1rem;
  font-size: .875rem;
  font-weight: 500;
  transition: .2s;
  ${({ theme }) => css`
    color: ${theme.colors.LightColor};
  `}

  &:hover {
    background: ${({ bgHover }) => bgHover};
  }
`;

export default DefaultButton;