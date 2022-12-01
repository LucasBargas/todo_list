import React, { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import Theme from '../../styles/Theme';
import Button from '../Button';
import Input from '../Input';
import * as S from './styles';

const Modal = ({
  setModal,
  task,
  modalAction,
  setTaskList,
  taskList,
  taskId,
  setChecked,
}) => {
  const [editInputValue, setEditInputValue] = useState('');
  const [editInputError, setEditInputError] = useState(false);
  const inputRef = useRef();

  const handleClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setModal(false);
    }
  };

  const handleTaskEdition = () => {
    if (editInputValue.length === 0) {
      setEditInputError('Você não realizou nenhuma edição.');
      return;
    }

    const taskListCopy = taskList.map((el) => el);

    taskListCopy.forEach((el) => {
      if (el.id === taskId && editInputValue.length > 0) {
        el.task = editInputValue;
        setModal(false);
      }
    });

    setTaskList(taskListCopy);
  };

  const deleteAllDoneTasks = () => {
    setTaskList(taskList.filter((el) => el.category !== 'done'));
    setChecked([]);
    localStorage.removeItem('taskListDone');
    setModal(false);

    const taskListDoneFiltered = taskList.filter(
      (el) => el.category === 'done',
    );

    if (taskList.length === taskListDoneFiltered.length) {
      localStorage.removeItem('taskList');
    }
  };

  const handleDeleteAllTasks = () => {
    setTaskList([]);
    setChecked([]);
    localStorage.removeItem('taskList');
    localStorage.removeItem('taskListDone');
    setModal(false);
  };

  const handleOnKeyPress = ({ charCode }) => {
    if (charCode === 13) handleTaskEdition();
  };

  const handleConfirmButton = () => {
    if (modalAction === 'delete' && taskList.length === 1) {
      localStorage.removeItem('taskList');
    }

    if (modalAction === 'delete' && taskId) {
      setTaskList(taskList.filter((el) => el.id !== taskId));
      setModal(false);
    }

    if (modalAction === 'deleteDone') deleteAllDoneTasks();

    if (modalAction === 'deleteAll') handleDeleteAllTasks();

    if (modalAction === 'edit') handleTaskEdition();
  };

  useEffect(() => {
    if (modalAction === 'edit') inputRef.current.focus();
  }, [modalAction]);

  return (
    <S.ModalContainer onClick={handleClick}>
      <S.ModalArea>
        <S.modalCloseButton>
          <button type="button" onClick={() => setModal(false)}>
            <IoClose />
          </button>
        </S.modalCloseButton>

        <S.ModalContent>
          {modalAction && modalAction === 'delete' && (
            <h2>Você está deletando a tarefa:</h2>
          )}

          {modalAction && modalAction === 'edit' && (
            <h2>Você está editando a tarefa:</h2>
          )}

          {modalAction && modalAction === 'deleteDone' && (
            <h2>Você irá deletar todas as suas tarefas completas!</h2>
          )}

          {modalAction && modalAction === 'deleteAll' && (
            <h2>Você irá deletar todas as suas tarefas!</h2>
          )}

          {task && <p>{`"${task}"`}</p>}

          {modalAction && modalAction === 'edit' && (
            <S.ModalEdit>
              <Input
                inputRef={inputRef}
                placeholder="Altere aqui sua Tarefa..."
                errorMsg={editInputError}
                value={editInputValue}
                onChange={({ target }) => setEditInputValue(target.value)}
                onKeyPress={handleOnKeyPress}
              />
            </S.ModalEdit>
          )}

          <S.ModalActions>
            <p>Você tem certeza disso?</p>

            <ul>
              <li>
                <Button
                  width="100%"
                  bg={Theme.colors.greenColor}
                  bgHover={Theme.colors.greenColorHover}
                  onClick={handleConfirmButton}
                >
                  Confirmar
                </Button>
              </li>
              <li>
                <Button
                  width="100%"
                  bg={Theme.colors.darkBtnColor}
                  bgHover={Theme.colors.primaryColor}
                  onClick={() => setModal(false)}
                >
                  Cancelar
                </Button>
              </li>
            </ul>
          </S.ModalActions>
        </S.ModalContent>
      </S.ModalArea>
    </S.ModalContainer>
  );
};

export default Modal;
