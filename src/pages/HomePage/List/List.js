import React, { useState, useRef } from 'react';
import * as S from './List.styles';
import Theme from '../../../styles/Theme';
import Button from '../../../components/Button/Button';

const List = ({ taskList, setTaskList }) => {
  const [category, setCategory] = useState('all');
  const [checked, setChecked] = useState([]);
  const buttonsFilter = useRef();

  const handleButtonClick = ({ target }) => {
    if (target.id === 'all') setCategory(target.id);
    if (target.id === 'done') setCategory(target.id);
    if (target.id === 'todo') setCategory(target.id);

    [...buttonsFilter.current.children].forEach(item => item.classList.remove('active'));
    target.classList.add('active');
  }

  const filterTaskList = taskList.length > 0 && taskList.filter(taskFilter => {
    return taskFilter.defaultCategory === category || taskFilter.category === category;
  });

  const handleChangeDone = ({ target }) => {
    const [...tasks] = taskList;
    const i = Number(target.closest('li').id);
    setTaskList([...tasks]);

   if (target.checked) {
    setChecked([...checked, target.value]);
    tasks[i].category = 'done';

   } else {
     setChecked(checked.filter(item => item !== target.value));
     tasks[i].category = 'todo';
   }
  }

  if (taskList.length) console.log(taskList);

  const handleDelete = ({ target }) => {
    const [...tasks] = taskList;
    const i = Number(target.closest('li').id);
    tasks.splice(i, 1);
    setTaskList([...tasks]);
  }

  return (
    <S.ListContainer>
      <h3>Lista de Tarefas</h3>
      <S.ButtonsFilter ref={buttonsFilter}>
        <Button
          className='active'
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
          disabled={filterTaskList ? false : true}
          id='done' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Completas
        </Button>
        
        <Button
          onClick={handleButtonClick}
          disabled={filterTaskList ? false : true}
          id='todo' 
          width='100%' 
          bg={Theme.colors.GreenColor}
          bgHover={Theme.colors.GreenColorHover}
        >
          Incompletas
        </Button>
      </S.ButtonsFilter>

      <S.TasksContainer>
        {filterTaskList.length > 0 && filterTaskList.map((task, index) => (
          <React.Fragment key={`task ${index}`}>
            <li id={index}>
              <span>{task.task}</span>
              {category !== 'done' && category !== 'todo' && (
                <S.TaskButtons>
                  <input 
                    value={task.task}
                    type="checkbox" 
                    checked={checked.includes(`${task.task}`)}
                    onChange={handleChangeDone} 
                  />
                  <button>Editar</button>
                  <button onClick={handleDelete}>Apagar</button>
                </S.TaskButtons>
              )}
            </li>
          </React.Fragment>
        ))}
        {filterTaskList.length === 0 && (
          <p>Não existem tarefas <S.NoTasks>{category === 'done' ? 'Completas' : 'Incompletas'}.</S.NoTasks></p>
        )}

        {filterTaskList === false && (
          <p>Não existem tarefas.</p>
        )}
      </S.TasksContainer>
      
    </S.ListContainer>
  )
}

export default List;
