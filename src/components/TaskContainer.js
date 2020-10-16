import React from 'react';
import styles from './TaskContainer.module.css';

export const TaskContainer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.smallerText}>25th Sep 13:00 - 13:30</p>
      <p className={styles.TitleText}>Dentist - younger kid</p>
      <p className={styles.smallerText}>Gdynia, ul. Świętojańska</p>
    </div>
  );
};
