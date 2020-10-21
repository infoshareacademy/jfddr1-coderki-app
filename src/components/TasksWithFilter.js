import React from 'react';
import styles from './TasksWithFilter.module.css';
import { getTasksList } from '../mockData/tasksData';
import { TaskContainer } from './TaskContainer';

export const TasksWithFilter = () => {
  const tasksData = getTasksList();
  const tasksToDisplay = tasksData.map((task) => task);

  return (
    <div className={styles.tasksContainer}>
      <TaskContainer tasks={tasksToDisplay} />
    </div>
  );
};
