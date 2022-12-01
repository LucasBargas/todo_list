import styled from 'styled-components';

export const TodoListContainer = styled.div`
  width: 100%;
  max-width: 620px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};
  box-shadow: 0 8px 24px #010409;
  border-radius: 6px;
  padding: 1.5rem 3rem;

  @media(max-width: 1024px) {
    max-width: 620px;
  }

  @media(max-width: 700px) {
    max-width: 500px;
  }

  @media(max-width: 500px) {
    max-width: none;
  }

  @media(max-width: 480px) {
    padding: 1.5rem;
  }

  @media(max-width: 400px) {
    padding: 1rem;
  }


  h1, h2 {
    text-align: center;
  }

  h2 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
`;

export const TodoListCreator = styled.div`
  padding-top: 1.5rem;
  text-align: center;
  font-size: .875rem;

  p {
    letter-spacing: 1px;
    font-weight: normal;
  }

  span, a {
    display: inline-block;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.greenColor};
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
