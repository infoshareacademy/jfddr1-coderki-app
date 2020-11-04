import React, { useState } from 'react';
import { EditTaskForm } from './EditTaskForm';
import styles from './Tasks.module.css';

export const TaskDetails = ({ task }) => {
  const [isInEditMode, setIsInEditMode] = useState(false);
  return isInEditMode ? (
    <EditTaskForm task={task} />
  ) : (
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
      <button className={styles.button} onClick={() => setIsInEditMode(true)}>
        Edit task
      </button>
      <button className={styles.button}>Delete task</button>
    </div>
  );
};
