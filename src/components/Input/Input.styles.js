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
`;

export default DefaultInput;
