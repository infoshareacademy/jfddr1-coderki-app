import React, { useState, useContext } from 'react';
import styles from './EditTaskForm.module.css';
import { TasksContext } from '../TasksContext';

export const EditTaskForm = ({ task, onBack }) => {
  const { updateTask, deleteTask } = useContext(TasksContext);
  const [formState, setFormState] = useState(task);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { id, ...task } = formState;
    updateTask(id, task);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    deleteTask(formState.id);
  };

  console.log(formState.id);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>edit task:</p>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formState.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="place"
          placeholder="Place"
          value={formState.place}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formState.category}
          onChange={handleChange}
        />
        <input
          name="startTime"
          placeholder="Start"
          type="date"
          value={formState.startTime}
          onChange={handleChange}
        />
        <input
          name="endTime"
          placeholder="End"
          type="date"
          value={formState.endTime}
          onChange={handleChange}
        />
        <input
          name="description"
          placeholder="description"
          type="text"
          value={formState.description}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Save
        </button>
        <button className={styles.button} onClick={handleRemove}>
          Remove
        </button>
        <button className={styles.button} onClick={onBack}>
          Close
        </button>
      </form>
    </div>
  );
};
