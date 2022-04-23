import styled from "styled-components";
import * as V from '../../styles/Variables';

export const TodoListContainer = styled.section`
  width: 100%;
  max-width: calc(690px + 2rem);
  margin: 0 auto;
  padding: 1.5rem 1rem;
`;

export const TodoListArea = styled.div`
  background: ${V.SecondaryColor};
  padding: 1.5rem 2.5rem;
  box-shadow: 0 8px 24px #010409;
  border: 1px solid ${V.BorderColor};
  border-radius: 6px;

  form {
    input, button {
      display: block;
      width: 100%;
    }
  }
`;