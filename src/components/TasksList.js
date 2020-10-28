import React, { useState, useEffect } from 'react';
// import styles from './TaskContainer.module.css';
import { TaskContainer } from './TaskContainer';
import styles from './TasksList.module.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import FilterInput from './FilterInput';
import CategoryFilter from './CategoryFilter';

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    byTitle: '',
    byCategory: '',
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection('tasks')
      .onSnapshot((snapshot) => {
        const tasks = [];

        snapshot.forEach((doc) => {
          tasks.push({
            id: doc.id,
            title: doc.get('title') || '',
            category: doc.get('category') || '',
            status: doc.get('status') || '',
            startTimeData: doc.get('startTime')?.toDate().toDateString() || '',
            startTimeTime:
              doc.get('startTime')?.toDate().toLocaleTimeString('en-US') || '',
            place: doc.get('place') || '',
          });
        });
        setTasks(tasks);
      });
  }, []);

  const tasksFilteredByTitle = tasks.filter((task) =>
    task.title.toLowerCase().includes(filters.byTitle.toLowerCase())
  );

  const tasksFilteredByCategory = tasksFilteredByTitle.filter((task) => {
    console.log(task);
    task.category.toLowerCase().includes(filters.byCategory.toLowerCase());
  });

  return (
    <div style={{ padding: '10px 5px 5px 5px' }}>
      <FilterInput
        onFilterSave={(value) => setFilters({ ...filters, byTitle: value })}
      />
      <CategoryFilter
        onCategorySelect={(value) =>
          setFilters({ ...filters, byCategory: value })
        }
      />
      <div>
        <div style={{ marginTop: 10 }}>
          <label>Filter by status: </label>
          <select name="categories" style={{ fontFamily: 'Quicksand' }}>
            <option value="placeholder"></option>
            <option value="all">All</option>
            <option value="open">Open</option>
            <option value="inProgress">In progress</option>
            <option value="someday">Someday</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: 5,
            paddingBottom: 3,
          }}
        >
          All tasks
        </h2>
      </div>
      <div className={styles.tasksContainer}>
        <TaskContainer tasks={tasksFilteredByCategory} />
      </div>
    </div>
  );
};
