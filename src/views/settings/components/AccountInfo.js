import React, { useState } from 'react';
import styles from './AccountInfo.module.css';

export const AccountInfo = ({ userName, familyRole, setSettings }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Update your profile </h1>
      <form>
        <h2 className={styles.subheader}>Enter your name</h2>
        <input
          className={styles.settingsInput}
          name="userName"
          onChange={(e) => setSettings('userName', e.target.value)}
          placeholder="Enter your name"
          type="text"
          value={userName}
        />
      </form>
      <h2 className={styles.subheader}>Set family role</h2>
      <div className={styles.buttonContainer}>
        <button
          className={
            familyRole === 'parent'
              ? styles.activeButton
              : styles.settingsButton
          }
          name="familyRole"
          type="submit"
          onClick={() => setSettings('familyRole', 'parent')}
          value={familyRole}
        >
          Parent
        </button>
        <button
          className={
            familyRole === 'child' ? styles.activeButton : styles.settingsButton
          }
          name="familyRole"
          type="submit"
          onClick={() => setSettings('familyRole', 'child')}
          value={familyRole}
        >
          Child
        </button>
      </div>
    </div>
  );
};
