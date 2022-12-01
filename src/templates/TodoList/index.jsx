import React, { useEffect, useState } from 'react';
import * as S from './styles';
import TodoListActions from './TodoListActions';
import TodoListArea from './TodoListArea';
import TodoListCreate from './TodoListCreate';

const TodoList = () => {
  const [action, setAction] = useState('all');
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem('taskList', JSON.stringify(taskList));
    }
  }, [taskList]);

  useEffect(() => {
    if (
      localStorage.getItem('taskList') &&
      localStorage.getItem('taskList').length > 0
    ) {
      setTaskList(JSON.parse(localStorage.getItem('taskList')));
    }
  }, []);

  return (
    <S.TodoListContainer>
      <h1>Crie uma Tarefa</h1>
      <TodoListCreate taskList={taskList} setTaskList={setTaskList} />
      <h2>Lista de Tarefas</h2>
      <TodoListActions taskList={taskList} setAction={setAction} />
      <TodoListArea
        taskList={taskList}
        setTaskList={setTaskList}
        action={action}
        setAction={setAction}
      />

      <S.TodoListCreator>
        <p>
          Esta lista de tarefas foi desenvolvida com <span>♥</span> por{' '}
          <a
            href="https://projetoslucasbargas.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Bargas.
          </a>
        </p>
        <a
          href="https://github.com/LucasBargas/todo_list"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui para visualizar o repositório no GitHub
        </a>
      </S.TodoListCreator>
    </S.TodoListContainer>
  );
};
export default TodoList;
