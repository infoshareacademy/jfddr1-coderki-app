import React from 'react';
import styles from './Task.module.css';
import dots from '../img/horizontal-dots.svg';
import { TasksContext } from '../TasksContext';

export const Tasks = ({ tasks }) => {
  const { tasks } = useContext(TasksContext);

  return (
    <div style={{ paddingTop: 15 }}>
      {tasks.map((task) => (
        <>
          <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
              <p className={styles.smallerText}>
                {task.startTimeData}
                <span style={{ marginLeft: 15 }}>{task.startTimeTime}</span>
              </p>
              {/* <p className={styles.smallerText}>{task.id}</p> */}
              {/* <p className={styles.titleText}>{task.task_title}</p> */}
              <p className={styles.titleText}>{task.title}</p>
              <p className={styles.smallerText}>{task.place}</p>
            </div>
            <div className={styles.iconContainer}>
              <img
                src={dots}
                className={styles.seeMoreIcon}
                alt="icon with 3 dots"
              />
            </div>
          </div>
        </>
      ))}
    </div>
  );
};
