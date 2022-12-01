import styled from 'styled-components';

const InputContainer = styled.div`
  input {
    display: block;
    width: 100%;
    padding: .625rem 1rem;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primaryColor};
    color: ${({ theme }) => theme.colors.lightColor};
    border: 1px solid transparent;

    &:focus {
      border-color: ${({ theme }) => theme.colors.greenColor};
      box-shadow: 0px 0px 6px 0px ${({ theme }) => theme.colors.greenColor};
    }
  }

  span {
    font-size: .8215rem;
    margin: .325rem;
  }
`;

export default InputContainer;
