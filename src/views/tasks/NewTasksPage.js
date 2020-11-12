import React, { useState, useContext } from 'react';
import { TasksContext } from '../../TasksContext';
import styles from './NewTaskPage.module.css';

let initialState = {
  title: '',
  id: '',
  category: '',
  place: '',
  startTime: '',
  endTime: '',
  description: '',
  status: '',
  remind: false,
  repeat: false,
};

const AddTask = () => {
  const { addTask } = useContext(TasksContext);
  const [newTask, setNewTask] = useState(initialState);

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };
  const handleModal = (e) => {
    alert('to do');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask(initialState);
  };

  return (
    <>
      <div className={styles.container}>
        <h1> Add task details</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            className={styles.input}
            type="text"
            name="title"
            placeholder="Title"
            value={newTask.title}
            onChange={(e) => handleChange(e)}
          />
          <input
            className={styles.input}
            type="text"
            name="place"
            placeholder="Place"
            value={newTask.place}
            onChange={(e) => handleChange(e)}
          />
          <select
            className={styles.select}
            name="category"
            placeholder="Category"
            onChange={(e) => handleChange(e)}
          >
            <option className={styles.option} value="Home">
              Home
            </option>
            <option className={styles.option} value="Work">
              Work
            </option>
            <option className={styles.option} value="School">
              School
            </option>
            <option className={styles.option} value="Relax">
              Relax
            </option>
            <option className={styles.option} value="Sport">
              Sport
            </option>
            <option className={styles.option} value="Important">
              Important
            </option>
            <option className={styles.option} value="Someday">
              Someday
            </option>
          </select>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              name="startTime"
              placeholder="Start"
              type="date"
              value={newTask.startTime}
              onChange={(e) => handleChange(e)}
            />
            <input
              className={styles.input}
              name="endTime"
              placeholder="End"
              type="date"
              value={newTask.endTime}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <input
            className={styles.input}
            name="description"
            type="text"
            placeholder="Task description"
            value={newTask.description}
            onChange={(e) => handleChange(e)}
          />
          <select
            className={styles.select}
            name="status"
            onChange={(e) => handleChange(e)}
          >
            <option className={styles.option} value="new">
              Select status
            </option>
            <option className={styles.option} value="new">
              New
            </option>
            <option className={styles.option} value="in progress">
              In progress
            </option>
            <option className={styles.option} value="completed">
              Closed
            </option>
          </select>
          <div className={styles.buttonContainer}>
            <button
              className={styles.newTaskButton}
              name="reminder"
              type="submit"
              onChange={(e) => handleModal(e)}
              value={newTask.reminder}
            >
              Remind
            </button>
            <button
              className={styles.newTaskButton}
              name="repeat"
              type="submit"
              onChange={(e) => handleModal(e)}
              value={newTask.repeat}
            >
              Repeat
            </button>
          </div>

          <button className={styles.saveButton} type="submit">
            Save task
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
