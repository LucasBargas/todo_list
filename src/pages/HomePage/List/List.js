import React, { useState, useRef, useEffect } from 'react';
import * as S from './List.styles';
import Theme from '../../../styles/Theme';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import Input from '../../../components/Input/Input';
import { GoPencil } from 'react-icons/go';
import { IoTrashBinSharp } from 'react-icons/io5';

const List = ({ taskList, setTaskList }) => {
  const [taskIndice, setTaskIndice] = useState(undefined);
  const [task, setTask] = useState(undefined);
  const [modificationType, setModificationType] = useState(undefined);
  const [doneErrorMsg, setDoneErrorMsg] = useState(false);

  const [deleteModal, setDeleteModal] = useState(null);
  const [editModal, setEditModal] = useState(null);
  const [deleteDoneTasksModal, setDeleteDoneTasksModal] = useState(null);
  const [deleteAllTasksModal, setDeleteAllTasksModal] = useState(null);

  const [category, setCategory] = useState('all');
  const [checked, setChecked] = useState([]);
  const buttonsFilter = useRef();
  const editInput = useRef();

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

  const handleDelete = ({ target }) => {
    const [...tasks] = taskList;
    const i = Number(target.closest('li').id);
    setTask(tasks[i].task)
    setModificationType('apagando');
    setTaskIndice(i);
    setTaskList([...tasks]);
    setDeleteModal(true);
  }

  const handleModalDeleteButtons = ({ target }) => {
    if (target.id === 'confirmButton') {
      const [...tasks] = taskList;
      tasks.splice(taskIndice, 1);
      setTaskList([...tasks]);

      setTimeout(() => {
        setDeleteModal(null);
      }, 200);
    }
    if (target.id === 'cancelButton') setDeleteModal(null);
  }

  const handleEdit = ({ target }) => {
    const [...tasks] = taskList;
    const i = Number(target.closest('li').id);
    setTask(tasks[i].task)
    setModificationType('editando');
    setTaskIndice(i);
    setTaskList([...tasks]);
    setEditModal(true);
  }

  const handleModalEditButtons = ({ target }) => {
    if (target.id === 'confirmButton') {
      if (editInput.current.value.length > 0) {
        const [...tasks] = taskList;
        tasks[taskIndice].task = editInput.current.value;
        setTaskList([...tasks]);
      }
      setTimeout(() => {
        setEditModal(null);
      }, 200);
    }
    if (target.id === 'cancelButton') setEditModal(null);
  }

  useEffect(() => {
    if (editModal) editInput.current.focus();
  }, [editModal]);

  const handleDeleteDoneTasks = ({ target }) => {
    if (target.id === 'confirmButton') {
      setTaskList(taskList.filter(done => done.category !== 'done'));
      
      taskList.forEach(doneTask => {
        if (doneTask.category === 'done') {
          setDoneErrorMsg(false);

          setTimeout(() => {
            setDeleteDoneTasksModal(null);
          }, 200);

        } else {
          setDoneErrorMsg(true);
        }
      })
    }
    
    if (target.id === 'cancelButton') {
      setDoneErrorMsg(false);
      setDeleteDoneTasksModal(null);
    }
  }

  const handleDeleteAllTasks = ({ target }) => {
    if (target.id === 'confirmButton') {
      setTaskList([]);

      setTimeout(() => {
        setDeleteAllTasksModal(null);
      }, 200);
    }
    
    if (target.id === 'cancelButton') setDeleteAllTasksModal(null);
  }

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      setDeleteModal(null);
      setEditModal(null);
      setDeleteDoneTasksModal(null);
      setDeleteAllTasksModal(null);
    }
  }

  const handleCloseModal = () => {
    setDeleteModal(null);
    setEditModal(null);
    setDeleteDoneTasksModal(null);
    setDeleteAllTasksModal(null);
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
        {filterTaskList && filterTaskList.map((task, index) => (
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
                    title='Completar tarefa' 
                  />
                  <button 
                    title='Editar tarefa'
                    onClick={handleEdit}
                  >
                    <GoPencil />
                  </button>
                  <button 
                    title='Apagar tarefa'
                    onClick={handleDelete}
                  >
                     <IoTrashBinSharp />
                  </button>
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

        {filterTaskList && (
          <S.HandleAllTasks>
            <Button 
              onClick={() => 
              setDeleteDoneTasksModal(true)} 
              width='100%' 
              bg={Theme.colors.DarkBtnColor}
              bgHover={Theme.colors.BorderColor}
            >
              Deletar tarefas completas
            </Button>

            <Button 
              onClick={() => setDeleteAllTasksModal(true)} 
              width='100%' 
              bg={Theme.colors.DarkBtnColor}
              bgHover={Theme.colors.BorderColor}
            >
              Deletar todas as tarefas
            </Button>
          </S.HandleAllTasks>
        )}
      </S.TasksContainer>
      {deleteModal && (
        <Modal
          handleCloseModal = {handleCloseModal}
          handleOutsideClick = {handleOutsideClick}
          onClick={handleModalDeleteButtons} 
          task={task} 
          modificationType={modificationType} 
          setDeleteModal={setDeleteModal} 
        />
      )}

      {editModal && (
        <Modal
          handleCloseModal = {handleCloseModal}
          handleOutsideClick = {handleOutsideClick} 
          onClick={handleModalEditButtons} 
          task={task} 
          modificationType={modificationType} 
          setEditModal={setEditModal}
        >
          <form>
            <Input input={editInput} placeholder='Altere aqui a sua tarefa...' />
          </form>
        </Modal>
      )}

      {deleteDoneTasksModal && (
        <Modal
          handleCloseModal = {handleCloseModal}
          handleOutsideClick = {handleOutsideClick}
          onClick={handleDeleteDoneTasks}
        >
          <h4>Você irá deletar todas as suas tarefas completas!</h4>
          {doneErrorMsg && <S.DoneError>Sinto muito, não há tarefas completas!</S.DoneError>}
        </Modal>
      )}

      {deleteAllTasksModal && (
        <Modal
          handleCloseModal = {handleCloseModal}
          handleOutsideClick = {handleOutsideClick}
          onClick={handleDeleteAllTasks}
        >
          <h4>Você irá deletar todas as suas tarefas!</h4>
        </Modal>
      )}
    </S.ListContainer>
  )
}

export default List;
