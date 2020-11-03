import React from 'react';
import styles from './TaskSettings.module.css';

export const TaskSettings = ({
  taskCategory,
  taskCategoryColor,
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
        <input
          name="taskCategoryColor"
          type="color"
          onClick={(e) => setSettings('taskCategoryColor', e.target.value)}
        />
      </div>
    </div>
  );
};
