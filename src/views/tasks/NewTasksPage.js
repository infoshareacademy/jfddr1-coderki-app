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
  decription: '',
  remind: false,
  repeat: false,
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
      <div className={styles.container}>
        <h1> Add task details</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input
            type="text"
            name="title"
            placeholder="Title"
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
          <div className={styles.inputContainer}>
            <input
              name="startTime"
              placeholder="Start"
              type="date"
              value={newTask.startTime}
              onChange={(e) => handleChange(e)}
            />
            <input
              name="endTime"
              placeholder="End"
              type="date"
              value={newTask.endTime}
              onChange={(e) => handleChange(e)}
            />
          </div>
          {/* <div className={styles.buttonContainer}>
          <p>Add members:</p>
          <input
            class="members-radiobutton"
            type="radio"
            name="members"
            //value={newTask.member}
            // onChange={(e) => handleChange(e)}
          />{' '}
          Mommy
          <input
            class="members-radiobutton"
            type="radio"
            name="members"
            //value={newTask.member}
            // onChange={(e) => handleChange(e)}
          />{' '}
          Daddy
          <input
            class="members-radiobutton"
            type="radio"
            name="members"
            //value={newTask.member}
            // onChange={(e) => handleChange(e)}
          />{' '}
          Kiddo
        </div> */}

          <p>Task description</p>
          <input
            className={styles.description}
            name="description"
            type="text"
            value={newTask.description}
            onChange={(e) => handleChange(e)}
          />
          <div className={styles.buttonContainer}>
            <button
              name="reminder"
              type="submit"
              onChange={(e) => handleChange(e)}
              value={newTask.reminder}
            >
              Reminder
            </button>
            <button
              name="repeat"
              type="submit"
              onChange={(e) => handleChange(e)}
              value={newTask.repeat}
            >
              Repeat
            </button>
          </div>

          <button type="submit">Save task</button>
        </form>
      </div>
    </>
  );
};

export default AddTask;
