import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../../TasksContext';

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
      <div style={{ paddingTop: 10, paddingLeft: 10 }}>
        <label>Search task by phrase:</label>
        <div style={{ display: 'flex', height: 40 }}>
          <input
            name="searchField"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            style={{ width: '98%', height: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
