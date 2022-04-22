import { useEffect, useRef, useState } from 'react';
import styles from './InputTask.module.scss';
import Button from '../../../components/Button/Button';

const InputTask = () => {
  const [errorMsg, setErrorMsg] = useState(false);
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);
  const input = useRef();

  const handleInputChange = ({ target }) => {
    setTask(target.value);
    setErrorMsg(false);
  }

  // console.log(listTask)

  const handleSubmit = e => {
    e.preventDefault();
    if (task) {
      setListTask([...listTask, task]);
      setTask('');
      input.current.focus();
      
    } else {
      setErrorMsg('Você precisa escrever uma tarefa.')
    }
  }

  useEffect(() => {
    input.current.focus();
  }, []);

  return (
    <form className={styles.formCreateTask} onSubmit={handleSubmit}>
      <input 
        ref={input}
        type="text" 
        placeholder='Escreva uma nova tarefa...' 
        value={task}
        onChange={handleInputChange}
      />
      {errorMsg && <p>{errorMsg}</p>}
      <Button className={styles.sendNewTask}>
        Adicionar nova tarefa
      </Button>
    </form>
  )
}

export default InputTask;
