import React, { useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);
  //   const [selectedFilters, setSelectedFilters] = useState(['one', 'two'])

  //   useEffect(() => {
  //     // let's say we call Firebase here, then
  //     setTasks(['raz', 'dwa', 'trzy']);
  //   }, []);
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

  // const addTask = (taskData) => {
  //   const newTask = {
  //     title: taskData.title,
  //     id: firebase.firestore.FieldValue.serverTimestamp(), // ewentualnie toDate()
  //     category: taskData.category,
  //     place: taskData.place,
  //   };
  //   firebase.firestore().collection('tasks').add(newTask);
  // };

  // const deleteTask = (taskToDeleteId) => {
  //   firebase.firestore().collection('tasks').doc(taskToDeleteId).delete();
  // };

  // const updateTask = (taskId, taskData) => {
  //   firebase.firestore().collection('tasks').doc(taskId).update(taskData);
  // };

  const value = {
    tasks: tasks === null ? [] : tasks,
    setTasks,
    // addTask,
    // deleteTask,
    // updateTask,
    //     selectedFilters,
    //     setSelectedFilters,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
