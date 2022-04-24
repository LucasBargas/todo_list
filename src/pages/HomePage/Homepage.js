import { useState } from 'react';
import * as S from './Homepage.styles';
import CreateTask from './CreateTask/CreateTask';
import List from './List/List';

const Homepage = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <S.TodoListContainer>
      <S.TodoListArea>
        <h2>Crie uma tarefa</h2>
        <CreateTask taskList={taskList} setTaskList={setTaskList} />
        <List taskList={taskList} setTaskList={setTaskList} />
      </S.TodoListArea>
    </S.TodoListContainer>
  )
}

export default Homepage;
