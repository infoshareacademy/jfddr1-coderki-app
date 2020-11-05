import React, { useState, useContext } from 'react';
import styles from './EditTaskForm.module.css';
import { TasksContext } from '../TasksContext';

export const EditTaskForm = ({ task }) => {
  const { updateTask, deleteTask } = useContext(TasksContext);
  const [formState, setFormState] = useState(task);
  // const [updatedTask, setUpdatedTask] = useState(formState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((oldState) => ({
      ...oldState,
      [name]: value,
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   updateTask(
  //     task.id,
  //     setUpdatedTask((upState) => ({
  //       ...upState,
  //       updatedTask,
  //     }))
  //   );
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask(formState);
  };

  const handleRemove = (e) => {
    e.preventDefault();
    deleteTask(formState.id);
  };

  console.log(formState.id);

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
        {/* <input
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
        /> */}
        <button type="submit" className={styles.button} onSubmit={handleSubmit}>
          Save
        </button>
        <button className={styles.button} onClick={handleRemove}>
          Back
        </button>
      </form>
    </div>
  );
};
