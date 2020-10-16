import React from 'react';
import styles from './AccountInfo.module.css';

export const AccountInfo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your account information: </h1>
      <form>
        <input type="text" name="text" placeholder="Enter your name" />
      </form>
      <h2 className={styles.title}>Choose your family role</h2>
      <div className={styles.buttonContainer}>
        <button type="submit">Parent</button>
        <button type="submit">Kid</button>
      </div>
      <h2 className={styles.title}>Add your photo</h2>
      <button type="submit">Click to choose photo</button>
    </div>
  );
};
