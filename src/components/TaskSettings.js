import React from 'react';
import styles from './TaskSettings.module.css';

export const TaskSettings = ({
  taskCategory,
  taskCategoryColour,
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
          name="taskCategoryColour"
          type="color"
          onClick={(e) => setSettings('taskCategoryColour', e.target.value)}
        />
      </div>
    </div>
  );
};
