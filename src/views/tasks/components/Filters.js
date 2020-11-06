import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../../TasksContext';
import styles from './Filters.module.css';

const Filters = ({ setFiltered }) => {
  const { tasks, activeCategoryTags, activeStatusTags } = useContext(
    TasksContext
  );

  const [phrase, setPhrase] = useState('');

  const compareCategoryTags = (tasksCatTags, activeCategoryTags) => {
    return activeCategoryTags.every((tag) => tasksCatTags.includes(tag));
  };

  const compareStatusTags = (tasksStatTags, activeStatusTags) => {
    return activeStatusTags.every((tag) => tasksStatTags.includes(tag));
  };

  useEffect(() => {
    const tasksFilteredByTitle = (tasks) => {
      return tasks.filter((task) => {
        return task.title.toLowerCase().includes(phrase.toLowerCase());
      });
    };

    const tasksFilteredByCategory = (tasks) => {
      return tasks
        .filter((task) =>
          compareCategoryTags(task.category, activeCategoryTags)
        )
        .filter((task) => {
          return task.category.includes(activeCategoryTags);
        });
    };

    const tasksFilteredByStatus = (tasks) => {
      return tasks
        .filter((task) => compareStatusTags(task.status, activeStatusTags))
        .filter((task) => {
          return task.status.includes(activeStatusTags);
        });
    };

    setFiltered(
      tasksFilteredByStatus(
        tasksFilteredByCategory(tasksFilteredByTitle(tasks))
      )
    );
  }, [phrase, activeCategoryTags, activeStatusTags, tasks]);

  return (
    <div>
      <div className={styles.paddingAndMargin}>
        <label>Search task by phrase:</label>
        <input
          className={styles.inputSize}
          name="searchField"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Filters;
