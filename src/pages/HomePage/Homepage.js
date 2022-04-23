import CreateTask from './CreateTask/CreateTask';
import * as S from './Homepage.styles';

const Homepage = () => {
  return (
    <S.TodoListContainer>
      <S.TodoListArea>
        <h2>Crie uma tarefa</h2>
        <CreateTask />
      </S.TodoListArea>
    </S.TodoListContainer>
  )
}

export default Homepage;
