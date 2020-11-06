import React, { useContext } from 'react';
import { TasksContext } from '../../../TasksContext';
import styles from './Filters.module.css';

const CategoryTagsList = () => {
  const { tasks, activeCategoryTags, clickCategoryTag } = useContext(
    TasksContext
  );
  const categoryTags = tasks.flatMap((task) => task.category);
  const uniqueCategories = Array.from(new Set(categoryTags));

  return (
    <div>
      <p className={styles.paddingAndMargin}>Filter by categories: </p>
      {uniqueCategories.map((tag) => (
        <button
          className={
            activeCategoryTags.includes(tag)
              ? `${styles.tag} ${styles.activeTag}`
              : styles.tag
          }
          onClick={() => clickCategoryTag(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default CategoryTagsList;
