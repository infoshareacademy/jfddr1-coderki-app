import React from 'react';
import styles from './TaskSettings.module.css';

export const TaskSettings = ({
  taskCategory,
  taskCategoryColor,
  setSettings,
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Task settings: </h1>
      <div>
        <h2 className={styles.subheader}>Add task category</h2>
        <input
          className={styles.settingsInput}
          name="taskCategory"
          type="text"
          placeholder="Add task category"
          value={taskCategory}
          onChange={(e) => setSettings('taskCategory', e.target.value)}
        />
        <h2 className={styles.subheader}>Add color</h2>
        <input
          className={styles.settingsColorInput}
          name="taskCategoryColor"
          type="color"
          onClick={(e) => setSettings('taskCategoryColor', e.target.value)}
        />
      </div>
    </div>
  );
};
