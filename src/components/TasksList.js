import React from 'react';
// import styles from './TaskContainer.module.css';
import { getTasksList } from '../mockData/tasksData';
import { TaskContainer } from './TaskContainer';
import styles from './TasksList.module.css';
import db from '../../Firebase/firebase';

export const TasksList = () => {
  const tasksData = getTasksList();
  const tasksToDisplay = tasksData.map((task) => task);

  return (
    <div className={styles.tasksContainer}>
      <TaskContainer tasks={tasksToDisplay} />
    </div>
  );
};
