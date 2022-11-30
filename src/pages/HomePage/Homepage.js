import { useEffect, useState } from 'react';
import * as S from './Homepage.styles';
import CreateTask from './CreateTask/CreateTask';
import List from './List/List';
import CreatorInfos from '../../components/CreatorInfos/CreatorInfos';

const Homepage = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    if (taskList.length > 0) {
      localStorage.setItem('list', JSON.stringify(taskList));
    }
  }, [taskList]);

  useEffect(() => {
    if (
      localStorage.getItem('list') &&
      localStorage.getItem('list').length > 0
    ) {
      setTaskList(JSON.parse(localStorage.getItem('list')));
    }
  }, []);

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
