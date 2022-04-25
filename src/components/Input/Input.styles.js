import styled, { css } from 'styled-components';

const DefaultInput = styled.input`
  display: block;
  width: 100%;
  padding: .5rem 1rem;
  border-radius: 4px;
  ${({ theme }) => css`
    background: ${theme.colors.PrimaryColor};
    color: ${theme.colors.LightColor};
  `}

  &:focus {
    ${({ theme }) => css`
      box-shadow: 0px 0px 6px 0px ${theme.colors.GreenColor};
      border: 1px solid ${theme.colors.GreenColor};
    `}
  }
`;

export default DefaultInput;
