import styled from 'styled-components';

const CreatorInfosContainer = styled.section`
  padding-top: 1.5rem;
  text-align: center;

  p {
    letter-spacing: 1px;
    font-weight: normal;
    
    span, a {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.GreenColor};
    }
  
    a {
      text-decoration: none;
    }
  }
`;

export default CreatorInfosContainer;
