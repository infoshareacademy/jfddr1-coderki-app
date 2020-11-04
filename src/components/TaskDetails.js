import React from 'react';

import styles from './Task.module.css';

export const TaskDetails = ({ task }) => {
  return (
    <div>
      <p className={styles.smallerText}>Status: {task.status}</p>
      <p className={styles.smallerText}>Category: {task.category}</p>
      <p className={styles.smallerText}>Description: {task.description}</p>
      <p className={styles.smallerText}>Assigned to: {task.assignedTo}</p>
      <p className={styles.smallerText}>
        End time: {task.startTimeData} {task.endTimeTime}
      </p>
      <p className={styles.smallerText}>Reminder: {task.reminder}</p>
      <p className={styles.smallerText}>Repeate: {task.repeate}</p>
      <button className={styles.button}>Edit task</button>
      <button className={styles.button}>Delete task</button>
    </div>
  );
};
