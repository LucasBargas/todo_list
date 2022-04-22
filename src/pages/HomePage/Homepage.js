import React from 'react'
import styles from './Homepage.module.scss';
import InputTask from './InputTask/InputTask';

const Homepage = () => {
  return (
    <section className={styles.toDoListContainer}>
      <div className={styles.toDoListArea}>
        <h2>Crie uma nova Tarefa</h2>
        <InputTask />
      </div>
    </section>
  )
}

export default Homepage