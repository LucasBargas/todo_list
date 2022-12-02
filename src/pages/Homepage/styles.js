import styled from 'styled-components';

const HomepageContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh + 2rem);
  padding: 2rem;

  @media(max-width: 480px) {
    align-items: flex-start;
    padding: 2.5rem 1.5rem;
  }

  @media(max-width: 340px) {
    align-items: flex-start;
    padding: 1.5rem 1rem;
  }
`;

export default HomepageContainer;
