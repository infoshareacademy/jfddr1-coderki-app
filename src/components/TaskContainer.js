import React from 'react';
import styles from './TaskContainer.module.css';
import { getTasksList } from '../mockData/tasksData';

export const TaskContainer = () => {
  const tasksData = getTasksList();

  const task = tasksData[0];
  console.log(tasksData);
  return (
    <div>
      {tasksData.map((task, index) => (
        <>
          <div className={styles.container}>
            <p className={styles.smallerText}>
              {task.date}
              <span style={{ marginLeft: 15 }}>{task.time}</span>
            </p>
            <p className={styles.titleText}>{task.task_title}</p>
            <p className={styles.smallerText}>{task.place}</p>
          </div>
        </>
      ))}
    </div>
  );
};
