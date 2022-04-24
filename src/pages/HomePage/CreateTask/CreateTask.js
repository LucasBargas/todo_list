import { useEffect, useRef, useState } from 'react';
import * as S from './CreateTask.styles';
import Theme from '../../../styles/Theme';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

const CreateTask = ({ taskList, setTaskList }) => {
  const [task, setTask] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);
  const input = useRef();

  const handleInputChange = ({ target }) => {
    setTask(target.value);
    setErrorMsg(false)
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (task) {
      setTaskList([...taskList, { task, defaultCategory: 'all', category: 'todo' }]);
      setTask('');
    }
    if (task === '') setErrorMsg(true);
    input.current.focus();
  }

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <S.CreateTaskContainer>
      <S.CreateTaskForm onSubmit={handleSubmit}>
        <Input
          input={input} 
          placeholder='Digite uma nova Tarefa...'
          value={task}
          onChange={handleInputChange} 
        />
        {errorMsg && <p>Você precisa inserir uma tarefa.</p>}

        <Button 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Adicionar nova Tarefa
        </Button>
      </S.CreateTaskForm>
    </S.CreateTaskContainer>
  )
}

export default CreateTask;
