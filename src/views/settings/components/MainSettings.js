import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './MainSettings.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';

export const MainSettings = ({
  privateOrPublic,
  emailNotifications,
  setSettings,
}) => {
  let history = useHistory();

  function handleClick() {
    firebase.auth().signOut();
    history.push('/home');
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Settings: </h1>
      <h2 className={styles.subheader}>Set account by default as</h2>
      <div className={styles.buttonContainer}>
        <button
          className={styles.settingsButton}
          name="privateOrPublic"
          type="submit"
          onClick={() => setSettings('privateOrPublic', 'private')}
          value={privateOrPublic}
        >
          Private
        </button>
        <button
          className={styles.settingsButton}
          name="privateOrPublic"
          type="submit"
          onClick={() => setSettings('privateOrPublic', 'public')}
          value={privateOrPublic}
        >
          Public
        </button>
      </div>
      <h2 className={styles.subheader}>Set e-mail notifications</h2>
      <div className={styles.buttonContainer}>
        <button
          className={styles.settingsButton}
          name="emailNotifications"
          type="submit"
          onClick={() => setSettings('emailNotifications', 'yes')}
          value={emailNotifications}
        >
          Yes
        </button>
        <button
          className={styles.settingsButton}
          name="emailNotifications"
          type="submit"
          onClick={() => setSettings('emailNotifications', 'no')}
          value={emailNotifications}
        >
          No
        </button>
      </div>
      {/* <h2 className={styles.subheader}> Set your local time zone</h2>
      <button>Click to choose your local time zone</button> */}
      <h2 className={styles.subheader}>Start your week on</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.settingsButton}>Sunday</button>
        <button className={styles.settingsButton}>Monday</button>
      </div>
      <h2 className={styles.subheader}>Change your password</h2>
      <button className={styles.settingsButton}>
        Click to change password
      </button>
      <h2 className={styles.subheader}>Sign out</h2>
      <button className={styles.settingsButton} onClick={handleClick}>
        Sign out
      </button>
      {/* <h2 className={styles.subheader}>About us</h2>
      <h2 className={styles.subheader}>Privacy Policy</h2> */}
    </div>
  );
};
