import * as S from './Modal.styles';
import { IoClose } from 'react-icons/io5';
import Theme from '../../styles/Theme';
import Button from '../Button/Button';

const Modal = ({ modificationType, task, children, onClick, handleOutsideClick, handleCloseModal }) => {
  return (
    <S.ModalContainer onClick={handleOutsideClick}>
      <S.ModalArea>
        <S.CloseModal>
          <button onClick={handleCloseModal}><IoClose/></button>
        </S.CloseModal>

        <S.ModalContent>
          {modificationType && <h4>Você está {modificationType} a tarefa:</h4>}
          {task && <p>"{task}"</p>}
          {children}
        </S.ModalContent>

        <S.ModalQuestion>
          <p>Você tem certeza disso?</p>
        </S.ModalQuestion>

        <S.ModalButtons>
          <Button 
            onClick={onClick} 
            width='auto' 
            id='confirmButton'
            bgHover={Theme.colors.GreenColorHover}
            bg={Theme.colors.GreenColor}
          >
            Confirmar
          </Button>

          <Button 
            onClick={onClick} 
            width='auto' 
            id='cancelButton'
            bgHover={Theme.colors.BorderColor}
            bg={Theme.colors.DarkBtnColor}
          >
            Cancelar
          </Button>
        </S.ModalButtons>
      </S.ModalArea>
    </S.ModalContainer>
  )
}

export default Modal;
