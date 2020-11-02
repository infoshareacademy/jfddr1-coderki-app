import React from 'react';
import styles from './TaskSettings.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';

export const MainSettings = ({
  privateOrPublic,
  emailNotifications,
  setSettings,
}) => {
  return (
    <div>
      <h1 className={styles.header}>Main settings: </h1>
      <h2 className={styles.subheader}>Set account by default as</h2>
      <div className={styles.buttonContainer}>
        <button
          name="privateOrPublic"
          type="submit"
          onClick={() => setSettings('privateOrPublic', 'private')}
          value={privateOrPublic}
        >
          Private
        </button>
        <button
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
          name="emailNotifications"
          type="submit"
          onClick={() => setSettings('emailNotifications', 'yes')}
          value={emailNotifications}
        >
          Yes
        </button>
        <button
          name="emailNotifications"
          type="submit"
          onClick={() => setSettings('emailNotifications', 'no')}
          value={emailNotifications}
        >
          No
        </button>
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
      <button onClick={() => firebase.auth().signOut()}>Sign out</button>
      <h2 className={styles.subheader}>About us</h2>
      <h2 className={styles.subheader}>Privacy Policy</h2>
    </div>
  );
};