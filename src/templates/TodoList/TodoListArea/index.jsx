import React, { useEffect, useState } from 'react';
import { MdEdit, MdDelete } from 'react-icons/md';
import Modal from '../../../components/Modal';
import * as S from './styles';
import Button from '../../../components/Button';
import Theme from '../../../styles/Theme';

const TodoListArea = ({ taskList, setTaskList, action }) => {
  const [modal, setModal] = useState(false);
  const [taskRef, setTaskRef] = useState(undefined);
  const [modalAction, setModalAction] = useState(undefined);
  const [taskId, setTaskId] = useState(undefined);
  const [checked, setChecked] = useState([]);

  const taskListFiltered = taskList.filter(
    (task) => task.defaultCategory === action || task.category === action,
  );

  const handleTask = (target, id) => {
    taskList.forEach((task) => {
      task.id === id && setTaskRef(task.task);
    });

    setModal(true);
    setModalAction(target.closest('button').id);
    setTaskId(id);
  };

  const handleChangeDone = (target, id) => {
    if (target.checked) {
      setChecked([...checked, target.value]);
      target.closest('ul').previousElementSibling.classList.add('done');
    }

    if (!target.checked) {
      setChecked(checked.filter((el) => el !== target.value));
      target.closest('ul').previousElementSibling.classList.remove('done');
    }

    if (checked.length === 1) {
      localStorage.removeItem('taskListDone');
    }

    const taskListCopy = taskList.map((el) => el);

    taskListCopy.forEach((el) => {
      if (el.id === id && el.category === 'todo') {
        el.category = 'done';
        return;
      }

      if (el.id === id && el.category === 'done') {
        el.category = 'todo';
      }
    });

    setTaskList(taskListCopy);
  };

  useEffect(() => {
    if (checked.length > 0) {
      localStorage.setItem('taskListDone', JSON.stringify(checked));
    }
  }, [checked]);

  useEffect(() => {
    if (
      localStorage.getItem('taskListDone') &&
      localStorage.getItem('taskListDone').length > 0
    ) {
      setChecked(JSON.parse(localStorage.getItem('taskListDone')));
    }
  }, []);

  return (
    <S.TodoListAreaContainer>
      {taskListFiltered.length === 0 ? (
        <p>
          Não existem tarefas{' '}
          <strong>
            {(action === 'all' && undefined) ||
              (action === 'done' && 'Completas') ||
              (action === 'todo' && 'Incompletas')}
          </strong>
          .
        </p>
      ) : (
        <S.TodoListAreaWrapper>
          {taskListFiltered.map((task) => (
            <li key={task.id}>
              <span className={checked.includes(task.task) ? 'done' : ''}>
                {task.task}
              </span>
              <S.TodoListAreaActions>
                <li>
                  <input
                    value={task.task}
                    type="checkbox"
                    checked={checked.includes(task.task)}
                    onChange={({ target }) => handleChangeDone(target, task.id)}
                    title="Completar tarefa"
                  />
                </li>
                <li>
                  <button
                    id="edit"
                    onClick={({ target }) => handleTask(target, task.id)}
                    type="button"
                  >
                    <MdEdit />
                  </button>
                </li>
                <li>
                  <button
                    id="delete"
                    onClick={({ target }) => handleTask(target, task.id)}
                    type="button"
                  >
                    <MdDelete />
                  </button>
                </li>
              </S.TodoListAreaActions>
            </li>
          ))}
        </S.TodoListAreaWrapper>
      )}

      {taskList.length > 0 && (
        <S.TodoListDestructiveButtons>
          <Button
            id="deleteDone"
            width="100%"
            bg={Theme.colors.darkBtnColor}
            bgHover={Theme.colors.primaryColor}
            onClick={({ target }) => handleTask(target)}
          >
            Deletar tarefas completas
          </Button>

          <Button
            id="deleteAll"
            width="100%"
            bg={Theme.colors.darkBtnColor}
            bgHover={Theme.colors.primaryColor}
            onClick={({ target }) => handleTask(target)}
          >
            Deletar todas as tarefas
          </Button>
        </S.TodoListDestructiveButtons>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          task={taskRef}
          modalAction={modalAction}
          setTaskList={setTaskList}
          taskList={taskList}
          taskId={taskId}
          setChecked={setChecked}
        />
      )}
    </S.TodoListAreaContainer>
  );
};

export default TodoListArea;
