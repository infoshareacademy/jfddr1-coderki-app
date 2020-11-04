import React, { useState } from 'react';
import styles from './Tasks.module.css';
import dots from '../img/horizontal-dots.svg';

export const Tasks = ({ tasks }) => {
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleToggle = (id) => {
    selectedTaskId === id ? setSelectedTaskId(null) : setSelectedTaskId(id);
  };

  return (
    <div className={styles.wrapper}>
      {tasks.map((task) => (
        <div className={styles.mainContainer}>
          <div onClick={() => handleToggle(task.id)}>
            <div className={styles.textContainer}>
              <p className={styles.smallerText}>
                {task.startTimeData}
                <span style={{ marginLeft: 15 }}>{task.startTimeTime}</span>
              </p>
              <p className={styles.titleText}>{task.title}</p>
              <p className={styles.smallerText}>
                {task.place ? 'Place: ' + task.place : null}
              </p>
            </div>

            <img
              src={dots}
              className={styles.seeMoreIcon}
              alt="icon with 3 dots"
            />
          </div>

          {task.id === selectedTaskId && (
            <div>
              <p className={styles.smallerText}>Status: {task.status}</p>
              <p className={styles.smallerText}>Category: {task.category}</p>
              <p className={styles.smallerText}>
                Description: {task.description}
              </p>
              <p className={styles.smallerText}>
                Assigned to: {task.assignedTo}
              </p>
              <p className={styles.smallerText}>
                End time: {task.startTimeData} {task.endTimeTime}
              </p>
              <p className={styles.smallerText}>Reminder: {task.reminder}</p>
              <p className={styles.smallerText}>Repeate: {task.repeate}</p>
              <button className={styles.button}>Edit task</button>
              <button className={styles.button}>Delete task</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
