import React, { useState } from 'react';
import styles from './Task.module.css';
import dots from '../img/horizontal-dots.svg';

export const Tasks = ({ tasks }) => {
  const [showTaskDetails, setShowTaskDetails] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleToggle = (id) => {
    selectedTaskId === id ? setSelectedTaskId(null) : setSelectedTaskId(id);
  };

  return (
    <>
      <div style={{ paddingTop: 15 }}>
        {tasks.map((task) => (
          <>
            <div
              onClick={(id) => handleToggle(id)}
              className={styles.mainContainer}
            >
              <div className={styles.textContainer}>
                <p className={styles.smallerText}>
                  {task.startTimeData}
                  <span style={{ marginLeft: 15 }}>{task.startTimeTime}</span>
                </p>
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
            {task.id === selectedTaskId && (
              <div>
                <h2>tu są detale</h2>
              </div>
            )}
          </>
        ))}
      </div>
    </>
  );
};
