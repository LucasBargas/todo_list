import styled from 'styled-components';

const DefaultInput = styled.input`
  display: block;
  width: 100%;
  padding: .5rem 1rem;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.PrimaryColor};
  color: ${({ theme }) => theme.colors.LightColor};
  border: 1px solid transparent;

  &:focus {
    border-color: ${({ theme }) => theme.colors.GreenColor};;
    box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.GreenColor};
  }
`;

export default DefaultInput;
