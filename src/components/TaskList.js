import React from 'react';
// import styles from './TaskContainer.module.css';
import { getTasksList } from '../mockData/tasksData';
import { TaskContainer } from './TaskContainer';

export const TaskList = () => {
  const tasksData = getTasksList();
  const tasksToDisplay = tasksData.filter((task) => task.id <= 5);

  return (
    <>
      <TaskContainer tasks={tasksToDisplay} />
    </>
  );
};
