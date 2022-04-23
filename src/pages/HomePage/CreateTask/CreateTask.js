import React from 'react';
import * as S from './CreateTask.styles';
import Theme from '../../../styles/Theme';
import Button from '../../../components/Button/Button';
import Input from '../../../components/Input/Input';

const CreateTask = () => {
  return (
    <S.CreateTaskContainer>
      <S.CreateTaskForm>
        <Input placeholder='Digite uma nova Tarefa...' />

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
