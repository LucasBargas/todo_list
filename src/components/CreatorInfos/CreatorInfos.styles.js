import styled from 'styled-components';

const CreatorInfosContainer = styled.section`
  padding-top: 1.5rem;
  text-align: center;

  p {
    letter-spacing: 1px;
    font-weight: normal;
  }

  span, a {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.GreenColor};
  }
  
  a {
    display: inline-block;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:last-of-type {
      margin-top: .25rem;
    }
  }
`;

export default CreatorInfosContainer;
