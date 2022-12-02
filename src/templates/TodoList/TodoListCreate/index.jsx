import React, { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import Theme from '../../../styles/Theme';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

const TodoListCreate = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const inputRef = useRef();

  const handleInputChange = ({ target }) => {
    setTask(target.value);
    setErrorMsg(false);
  };

  const handleVerifyTask = () => {
    let isValid = true;

    const taskListCopy = taskList.map((el) => el.task);
    if (taskListCopy.includes(task)) isValid = false;

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task === '') {
      setErrorMsg('Você precisa digitar uma tarefa.');
      return;
    }

    if (!handleVerifyTask()) {
      setErrorMsg('Você já cadastrou esta tarefa.');
      return;
    }

    if (task.length > 0) {
      setTaskList([
        {
          id: Date.now() + String(Math.floor(Math.random() * 1000)),
          task,
          defaultCategory: 'all',
          category: 'todo',
        },
        ...taskList,
      ]);
      setTask('');
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <S.TodoListCreateContainer>
      <S.TodoListCreateForm onSubmit={handleSubmit}>
        <Input
          inputRef={inputRef}
          placeholder="Digite uma nova Tarefa..."
          value={task}
          onChange={handleInputChange}
          errorMsg={errorMsg}
        />
        <Button
          width="100%"
          bg={Theme.colors.greenColor}
          bgHover={Theme.colors.greenColorHover}
        >
          Adicionar nova Tarefa
        </Button>
      </S.TodoListCreateForm>
    </S.TodoListCreateContainer>
  );
};

export default TodoListCreate;
