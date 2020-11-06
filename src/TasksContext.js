import React, { useState, createContext, useEffect } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export const TasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [activeCategoryTags, setActiveCategoryTags] = useState([]);
  const [activeStatusTags, setActiveStatusTags] = useState([]);

  const [user, setUser] = useState(null);
  const [settingsData, setSettingsData] = useState({});
  // console.log('settingsContext', settingsData);

  const userUid = user && user.uid;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  useEffect(() => {
    if (userUid) {
      firebase
        .firestore()
        .collection('users')
        .doc(userUid)
        .onSnapshot((snapshot) => {
          setSettingsData(snapshot.data());
        });
    }
  }, [userUid]);
  //   const [selectedFilters, setSelectedFilters] = useState(['one', 'two'])

  useEffect(() => {
    if (user === null) {
      return;
    }
    firebase
      .firestore()
      .collection('users')
      .doc(user.uid)
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
            description: doc.get('description') || '',
          });
        });
        setTasks(tasks);
      });
  }, [userUid]);

  const addTask = (taskData) => {
    const newTask = {
      title: taskData.title,
      id: firebase.firestore.FieldValue.serverTimestamp(), // ewentualnie toDate()
      category: taskData.category,
      place: taskData.place,
      description: taskData.description,
    };
    firebase
      .firestore()
      .collection('users')
      .doc(userUid)
      .collection('tasks')
      .add(newTask);
  };

  const deleteTask = (taskToDeleteId) => {
    firebase.firestore().collection('tasks').doc(taskToDeleteId).delete();
  };

  const updateTask = (taskId, taskData) => {
    firebase.firestore().collection('tasks').doc(taskId).update(taskData);
  };

  const clickCategoryTag = (tag) => {
    if (!activeCategoryTags.includes(tag)) {
      setActiveCategoryTags([...activeCategoryTags, tag]);
    } else {
      setActiveCategoryTags(
        activeCategoryTags.filter((activeCatTag) => activeCatTag !== tag)
      );
    }
  };

  const clickStatusTag = (tag) => {
    if (!activeStatusTags.includes(tag)) {
      setActiveStatusTags([...activeStatusTags, tag]);
    } else {
      setActiveStatusTags(
        activeStatusTags.filter((activeStatTag) => activeStatTag !== tag)
      );
    }
  };

  const clearActiveTags = () => {
    setActiveCategoryTags([]);
    setActiveStatusTags([]);
  };

  const value = {
    tasks: tasks === null ? [] : tasks,
    setTasks,
    addTask,
    userUid,
    user,
    settingsData,
    setSettingsData,
    deleteTask,
    updateTask,
    //     selectedFilters,
    //     setSelectedFilters,
    clickCategoryTag,
    activeCategoryTags,
    setActiveCategoryTags,
    clickStatusTag,
    activeStatusTags,
    setActiveStatusTags,
    clearActiveTags,
  };

  return (
    <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
  );
};
