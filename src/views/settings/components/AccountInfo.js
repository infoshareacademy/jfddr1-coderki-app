import React from 'react';
import styles from './AccountInfo.module.css';

export const AccountInfo = ({
  userName,
  familyRole,
  // selectedFile,
  setSettings,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Account information: </h1>
      <form>
        <input
          className={styles.settingsInput}
          name="userName"
          onChange={(e) => setSettings('userName', e.target.value)}
          placeholder="Enter your name"
          type="text"
          value={userName}
        />
      </form>
      <h2 className={styles.subheader}>Choose your family role</h2>
      <div className={styles.buttonContainer}>
        <button
          name="familyRole"
          type="submit"
          onClick={() => setSettings('familyRole', 'parent')}
          value={familyRole}
        >
          Parent
        </button>
        <button
          name="familyRole"
          type="submit"
          onClick={() => setSettings('familyRole', 'child')}
          value={familyRole}
        >
          Child
        </button>
      </div>
      {/* <h2 className={styles.subheader}>Add your photo</h2>
      <button
      // name="selectedFile"
      // type="file"
      // value={selectedFile}
      // onClick={(e) => setSettings('selectedFile', e.target.files[0])}
      >
        Click to choose photo
      </button> */}
    </div>
  );
};
