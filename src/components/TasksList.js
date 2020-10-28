import React, { useContext } from 'react';
// import styles from './TaskContainer.module.css';
import { Tasks } from './Tasks';

const TaskList = ({ tasks }) => {
  const tasksToDisplay = tasks;

  return (
    <>
      <Tasks tasks={tasksToDisplay} />
    </>
  );
};

export default TaskList;
