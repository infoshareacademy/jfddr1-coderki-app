import React, { useContext } from 'react';
import { TasksContext } from '../../../TasksContext';
import styles from './Filters.module.css';

const StatusTagsList = () => {
  const { tasks, activeStatusTags, clickStatusTag } = useContext(TasksContext);
  const statusTags = tasks.flatMap((task) => task.status);
  const uniqueStatusTags = Array.from(new Set(statusTags));

  return (
    <div>
      <p className={styles.paddingAndMargin}>Filter by status: </p>
      {uniqueStatusTags.map((tag) => (
        <button
          className={
            activeStatusTags.includes(tag)
              ? `${styles.tag} ${styles.activeTag}`
              : styles.tag
          }
          onClick={() => clickStatusTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default StatusTagsList;
