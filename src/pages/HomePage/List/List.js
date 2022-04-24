import React, { useState } from 'react';
import * as S from './List.styles';
import Theme from '../../../styles/Theme';
import Button from '../../../components/Button/Button';

const List = ({ taskList, setTaskList }) => {
  const [category, setCategory] = useState('all');

  const handleButtonClick = ({ target }) => {
    if (target.id === 'all') setCategory(target.id);
    if (target.id === 'done') setCategory(target.id);
    if (target.id === 'todo') setCategory(target.id);
  }

  const filterTaskList = taskList.length > 0 && taskList.filter(taskFilter => {
    return taskFilter.defaultCategory === category || taskFilter.category === category;
  });

  const handleDone = ({ target }) => {
    const [...tasks] = taskList;
    const i = Number(target.closest('li').id);
    setTaskList([...tasks]);

    if (target.closest('li').classList.contains('done')) {
      target.closest('li').classList.remove('done');
      tasks[i].category = 'todo';
    } else {
      target.closest('li').classList.add('done');
      tasks[i].category = 'done';
    }
  }

  const handleDelete = ({ target }) => {
    const [...tasks] = taskList;
    const i = Number(target.closest('li').id);
    tasks.splice(i, 1);
    setTaskList([...tasks]);
  }
  
  if (taskList.length) {
    console.log(taskList);
  }

  return (
    <S.ListContainer>
      <h3>Lista de Tarefas</h3>
      <S.ButtonsFilter>
        <Button
          onClick={handleButtonClick}
          id='all' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Todas
        </Button>

        <Button
          onClick={handleButtonClick}
          id='done' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Completas
        </Button>
        
        <Button
          onClick={handleButtonClick}
          id='todo' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Incompletas
        </Button>
      </S.ButtonsFilter>

      {(filterTaskList || filterTaskList.length) && (
        <S.TasksContainer>
          {filterTaskList && filterTaskList.map((task, index) => (
            <React.Fragment key={`task ${index}`}>
              <li id={index}>
                <span>{task.task}</span>
                <S.TaskButtons>
                  <input type="checkbox" onClick={handleDone} />
                  <button>Editar</button>
                  <button onClick={handleDelete}>Apagar</button>
                </S.TaskButtons>
              </li>
            </React.Fragment>
          ))}
        </S.TasksContainer>
      )}
      
    </S.ListContainer>
  )
}

export default List;
