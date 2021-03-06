import { useState } from 'react';
import * as S from './Homepage.styles';
import CreateTask from './CreateTask/CreateTask';
import List from './List/List';
import CreatorInfos from '../../components/CreatorInfos/CreatorInfos';

const Homepage = () => {
  const defaulTasks = [
    { task: 'Estudar TailwindCSS', defaultCategory: 'all', category: 'todo' },
    { task: 'Estudar Bootstrap5', defaultCategory: 'all', category: 'todo' },
    { task: 'Estudar NextJS', defaultCategory: 'all', category: 'todo' },
    { task: 'Estudar TypeScript', defaultCategory: 'all', category: 'todo' },
    { task: 'Estudar NodeJS', defaultCategory: 'all', category: 'todo' },
  ];

  const [taskList, setTaskList] = useState([...defaulTasks]);

  return (
    <S.TodoListContainer>
      <S.TodoListArea>
        <h2>Crie uma tarefa</h2>
        <CreateTask taskList={taskList} setTaskList={setTaskList} />
        <List taskList={taskList} setTaskList={setTaskList} />
      </S.TodoListArea>
      <CreatorInfos />
    </S.TodoListContainer>
  )
}

export default Homepage;
