import React, { useState, useEffect } from 'react';
// import styles from './TaskContainer.module.css';
import { getTasksList } from '../mockData/tasksData';
import { TaskContainer } from './TaskContainer';
import styles from './TasksList.module.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('tasks')
      .onSnapshot((snapshot) => {
        const tasks = [];
        snapshot.forEach((doc) =>
          tasks.push({
            id: doc.id,
            title: doc.get('title'),
            isDone: doc.get('isDone'),
          })
        );
        setTasks(tasks);
      });
  }, []);
  return (
    <div className={styles.tasksContainer}>
      <TaskContainer tasks={tasks} />
    </div>
  );
};
