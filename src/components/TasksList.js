import React, { useContext } from 'react';
// import styles from './TaskContainer.module.css';
import { Tasks } from './Tasks';
import { TasksContext } from '../TasksContext';

const TaskList = () => {
  const { tasks } = useContext(TasksContext);
  const tasksToDisplay = tasks;

  return (
    <>
      <Tasks tasks={tasksToDisplay} />
    </>
  );
};

export default TaskList;
