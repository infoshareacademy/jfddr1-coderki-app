import React, { useState } from 'react';
import styles from './EditTaskForm.module.css';

export const EditTaskForm = ({ task }) => {
  const [formState, setFormState] = useState(task);
  console.log(task);

  const handleChange = (e) => {
    setFormState({ ...task, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form>
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
          type="text"
          value={formState.description}
          onChange={handleChange}
        />
        <button type="submit" className={styles.button}>
          Save
        </button>
        <button className={styles.button}>Back</button>
      </form>
    </div>
  );
};
