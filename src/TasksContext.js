// import React, { createContext } from 'react';

// export const TaskContext = createContext();

// category;
// title;
// date;
// place;
// status;
// reminder;
// repeat;
// desription;
// public / private;

import React, { useState, createContext, useEffect, useContext } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { UserContext } from './UserContext';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    if (user === null) {
      return;
    }

    const cleanup = firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('tasks')
      .onSnapshot((snapshot) => {
        const tasks = [];
        snapshot.forEach((doc) =>
          tasks.push({
            id: doc.id,
            ...doc.data(),
          })
        );
        setTasks(tasks);
      });

    return () => {
      cleanup();
    };
  }, [user]);

  const addTask = (taskData) => {
    const newTask = {
      title: taskData.title,
      isDone: false,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('tasks')
      .add(newTask);
  };

  const deleteTask = (taskToDeleteId) => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('tasks')
      .doc(taskToDeleteId)
      .delete();
  };

  const updateTask = (taskId, taskData) => {
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
      .collection('tasks')
      .doc(taskId)
      .update(taskData);
  };

  const value = {
    tasks: tasks === null ? [] : tasks,
    setTasks,
    addTask,
    deleteTask,
    updateTask,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
