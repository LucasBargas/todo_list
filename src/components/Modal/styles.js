import styled, { keyframes } from 'styled-components';

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(13, 16, 23, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding: 0 1rem;
`;

export const ModalArea = styled.div`
  max-width: 560px;
  width: 100%;
  box-shadow: 0 8px 24px #010409;
  border-radius: 6px;
  animation: ${modalAnimation} .4s forwards;
  background: ${({ theme }) => theme.colors.secondaryColor};
  border: 1px solid ${({ theme }) => theme.colors.borderColor};

  @media (max-width: 480px) {
    max-width: none;
  }
`;

export const modalCloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.lightColor};
    font-size: 1.5rem;
    padding: .625rem;
  }
`;

export const ModalContent = styled.div`
  padding: 0 1.5rem 1.5rem 1.5rem;
  text-align: center;

  h2 {
    margin: 0;
  }

  p {
    margin-top: .625rem;
  }
`;

export const ModalActions = styled.div`
  padding-top: 1.5rem;

  p {
    margin: 0 0 1rem 0;
  }

  ul {
    display: flex;
    justify-content: center;
    gap: .875rem;
  }
`;

export const ModalEdit = styled.div`
  padding-top: 1rem;
  text-align: left !important;
`;
