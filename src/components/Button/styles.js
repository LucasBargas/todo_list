import styled from 'styled-components';

const DefaultButton = styled.button`
  display: block;
  background: ${({ bg }) => bg};
  width: ${({ width }) => width};
  padding: .75rem 1rem;
  font-size: .875rem;
  font-weight: 500;
  transition: .2s;
  border-radius: 4px;
  box-shadow: transparent 0px 0px, transparent 0px 0px;
  color: ${({ theme }) => theme.colors.lightColor};

  &:hover {
    background: ${({ bgHover }) => bgHover};
  }
`;

export default DefaultButton;
