import React from 'react';
import * as S from './List.styles';
import Theme from '../../../styles/Theme';
import Button from '../../../components/Button/Button';

const List = ({ taskList, setTaskList }) => {
  if (taskList.length) {
    console.log(taskList);
  }

  return (
    <S.ListContainer>
      <h3>Lista de Tarefas</h3>
      <S.ButtonsFilter>
        <Button
          id='all' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Todas
        </Button>

        <Button
          id='done' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Completas
        </Button>
        
        <Button
          id='todo' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Incompletas
        </Button>
      </S.ButtonsFilter>
    </S.ListContainer>
  )
}

export default List;
