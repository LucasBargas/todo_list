import { useState } from 'react';
import CreateTask from './CreateTask/CreateTask';
import * as S from './Homepage.styles';

const Homepage = () => {
  const [taskList, setTaskList] = useState([]);

  return (
    <S.TodoListContainer>
      <S.TodoListArea>
        <h2>Crie uma tarefa</h2>
        <CreateTask taskList={taskList} setTaskList={setTaskList} />
      </S.TodoListArea>
    </S.TodoListContainer>
  )
}

export default Homepage;
