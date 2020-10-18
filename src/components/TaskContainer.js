import React from 'react';
import styles from './TaskContainer.module.css';

export const TaskContainer = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
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
