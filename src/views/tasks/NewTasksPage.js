// import firebase from 'firebase/app';
import React, { useState, useContext } from 'react';
import { TasksContext } from '../../TasksContext';

let initialState = {
  title: '',
  id: '',
  category: '',
  place: '',
};

const AddTask = () => {
  const { addTask } = useContext(TasksContext);
  const [newTask, setNewTask] = useState(initialState);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(initialState);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Add new task to database</h1>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="title"
          placeholder="Task name"
          value={newTask.title}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={newTask.place}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newTask.category}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">CREATE TASK</button>
      </form>
    </>
  );
};
export default AddTask;
