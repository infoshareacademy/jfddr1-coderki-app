import React, { useContext } from 'react';
import { TasksContext } from '../../../TasksContext';
import styles from './CategoryTagsList.module.css';

const CategoryTagsList = () => {
  const { tasks, activeTags, clickedTag } = useContext(TasksContext);
  const allTags = tasks.flatMap((task) => task.category);
  const uniqueTags = Array.from(new Set(allTags));

  return (
    <div>
      <p>Filter by categories: </p>
      {uniqueTags.map((tag) => (
        <button
          className={
            activeTags.includes(tag)
              ? `${styles.tag} ${styles.activeTag}`
              : styles.tag
          }
          onClick={() => clickedTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default CategoryTagsList;
