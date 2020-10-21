import React from 'react';
import styles from './AccountInfo.module.css';

// What to do next:
// Check how to set state for file object (profile picture) and colour object (taskCategoryColour)

export const AccountInfo = ({
  userName,
  familyRole,
  // selectedFile,
  setSettings,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Your account information: </h1>
      <form>
        <input
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
      <h2 className={styles.subheader}>Add your photo</h2>
      <button
      // name="selectedFile"
      // type="file"
      // value={selectedFile}
      // onClick={(e) => setSettings('selectedFile', e.target.files[0])}
      >
        Click to choose photo
      </button>
    </div>
  );
};

export const TaskSettings = ({
  taskCategory,
  // taskCategoryColour,
  setSettings,
}) => {
  return (
    <div>
      <h1 className={styles.header}>Task settings: </h1>
      <div>
        <input
          name="taskCategory"
          type="text"
          placeholder="Add new category of tasks"
          value={taskCategory}
          onChange={(e) => setSettings('taskCategory', e.target.value)}
        />
        <button
        // name="taskCategoryColour"
        // type="colour"
        // value={taskCategoryColour}
        // onClick={(e) => setSettings('taskCategoryColour', e.target.value)}
        >
          Click to choose colour for your task category
        </button>
      </div>
    </div>
  );
};

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
      <button>Click to log out</button>
      <h2 className={styles.subheader}>About us</h2>
      <h2 className={styles.subheader}>Privacy Policy</h2>
    </div>
  );
};
