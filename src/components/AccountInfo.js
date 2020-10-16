import React from 'react';
import styles from './AccountInfo.module.css';

export const AccountInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Your account information: </h1>
      <form>
        <input type="text" name="userName" placeholder="Enter your name" />
      </form>
      <h2 className={styles.subheader}>Choose your family role</h2>
      <div className={styles.buttonContainer}>
        <button type="submit">Parent</button>
        <button type="submit">Kid</button>
      </div>
      <h2 className={styles.subheader}>Add your photo</h2>
      <button type="submit">Click to choose photo</button>
    </div>
  );
};

export const TaskSettings = () => {
  return (
    <div>
      <h1 className={styles.header}>Task settings: </h1>
      <div>
        <input
          type="text"
          name="taskCategory"
          placeholder="Add new category of tasks"
        />
        <button>Click to choose colour for your task</button>
      </div>
    </div>
  );
};
