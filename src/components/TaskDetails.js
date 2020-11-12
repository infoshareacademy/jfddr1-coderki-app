import React, { useState, useContext } from 'react';
import { EditTaskForm } from './EditTaskForm';
import styles from './Tasks.module.css';
import { TasksContext } from '../TasksContext';

export const TaskDetails = ({ task }) => {
  const { deleteTask } = useContext(TasksContext);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const handleRemove = (e) => {
    e.preventDefault();
    deleteTask(task.id);
  };
  return isInEditMode ? (
    <EditTaskForm task={task} onBack={() => setIsInEditMode(false)} />
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
      <button className={styles.button} onClick={handleRemove}>
        Delete task
      </button>
    </div>
  );
};
