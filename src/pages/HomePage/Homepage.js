import { useState } from 'react';
import styles from './Homepage.module.scss';
import InputTask from './InputTask/InputTask';

const Homepage = () => {
  const [listTask, setListTask] = useState([]);

  return (
    <section className={styles.toDoListContainer}>
      <div className={styles.toDoListArea}>
        <h2>Crie uma nova Tarefa</h2>
        <InputTask
          listTask={listTask}
          setListTask={setListTask}
        />
      </div>
    </section>
  )
}

export default Homepage