import React, { useState } from 'react';
import styles from './Tasks.module.css';
import dots from '../img/horizontal-dots.svg';
<<<<<<< HEAD
import { TaskDetails } from './TaskDetails';
=======
>>>>>>> master

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

          {task.id === selectedTaskId && <TaskDetails task={task} />}
        </div>
      ))}
    </div>
  );
};
