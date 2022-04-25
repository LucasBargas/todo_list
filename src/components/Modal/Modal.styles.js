import styled, { css, keyframes } from 'styled-components';

const modalAnimation = keyframes`
  from{
    opacity: 0;
    transform: translateY(-50px);
  }
  to{
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 16, 23, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`

export const ModalArea = styled.div`
  max-width: 560px;
  width: 100%;
  box-shadow: 0 8px 24px #010409;
  border-radius: 6px;
  animation: ${modalAnimation} .4s forwards;
  ${({ theme }) => css`
    background: ${theme.colors.SecondaryColor};
    border: 1px solid ${theme.colors.BorderColor};
  `}
`;

export const CloseModal = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40px;
    font-size: 1.5rem;
    background: transparent;
    ${({ theme }) => css`
      color: ${theme.colors.LightColor};
    `}
  }
`;

export const ModalContent = styled.div`
  padding: 0 1rem 1.5rem 1rem;

  h4, p {
    text-align: center;
  }

  h4 {
    font-size: 1.25rem;
  }

  p {
    margin-top: .75rem;
  }

  form {
    padding-top: 1rem;
  }
`;

export const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: .75rem;
  padding-bottom: 1.5rem;

  button#confirmButton {
    ${({ theme }) => css`
      background: ${theme.colors.GreenColor};
    `}
  }

  button#cancelButton {
    ${({ theme }) => css`
      background: ${theme.colors.DarkBtnColor};
    `}
  }
`;

export const ModalQuestion = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;