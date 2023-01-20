import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  const handleTaskVerification = () => {
    let isValid = true;

    const taskListCopy = taskList.map((el) => el.task);
    if (taskListCopy.includes(task)) isValid = false;

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) {
      setErrorMsg('Você precisa digitar uma tarefa.');
      return;
    }

    if (!handleTaskVerification()) {
      setErrorMsg('Você já cadastrou uma tarefa com este tema.');
      return;
    }

    setTaskList([
      {
        id: uuidv4(),
        task,
        defaultCategory: 'all',
        category: 'todo',
      },
      ...taskList,
    ]);
    setTask('');
  };

  console.log(task);

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
