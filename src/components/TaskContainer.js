import React from 'react';
import styles from './TaskContainer.module.css';
import dots from '../img/horizontal-dots.svg';

export const TaskContainer = ({ tasks }) => {
  return (
    <div style={{ paddingTop: 15 }}>
      {tasks.map((task, index) => (
        <>
          <div className={styles.mainContainer}>
            <div className={styles.textContainer}>
              {/* <p className={styles.smallerText}>
                {task.date}
                <span style={{ marginLeft: 15 }}>{task.time}</span>
              </p> */}
              <p className={styles.smallerText}>{task.startTime}</p>
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
