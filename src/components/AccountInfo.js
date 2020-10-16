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

export const MainSettings = () => {
  return (
    <div>
      <h1 className={styles.header}>Main settings: </h1>
      <h2 className={styles.subheader}>Set account by default as</h2>
      <div className={styles.buttonContainer}>
        <button>Private</button>
        <button>Public</button>
      </div>
      <h2 className={styles.subheader}>Set e-mail notifications</h2>
      <div className={styles.buttonContainer}>
        <button>Yes</button>
        <button>No</button>
      </div>
      <h2 className={styles.subheader}> Set your local time zone</h2>
      <button>Click to choose your local time zone</button>
      <h2 className={styles.subheader}>Start your week on</h2>
      <div className={styles.buttonContainer}>
        <button>Sunday</button>
        <button>Monday</button>
      </div>
      <h2 className={styles.subheader}>Change your password</h2>
      <button>Click to change password</button>
      <h2 className={styles.subheader}>Log out</h2>
      <button>Click to log out</button>
      <h2 className={styles.subheader}>About us</h2>
      <h2 className={styles.subheader}>Privacy Policy</h2>
    </div>
  );
};
