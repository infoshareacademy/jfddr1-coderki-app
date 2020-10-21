import React from 'react';
// import styles from './TasksPage.module.css';

const TasksDatabase = firebase
  .firestore()
  .collection('tasks')
  .get()
  .then((tasks) => {
    tasks.forEach((task) => {
      console.log(task.id);
      console.log(task.data());
    });
  });

const NewTasksPage = () => {
  return <div>Hello</div>;
};

export default NewTasksPage;
