import React from 'react';
import styles from './InputTask.module.scss';
import Button from '../../../components/Button/Button';

const InputTask = () => {
  return (
    <form className={styles.formCreateTask} onSubmit={(e) => e.preventDefault()}>
      <input type="text" placeholder='Escreva uma nova tarefa...' />
      <Button className={styles.sendNewTask}>Adicionar nova tarefa</Button>
    </form>
  )
}

export default InputTask;
