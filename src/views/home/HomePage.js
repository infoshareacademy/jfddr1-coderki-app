import React, { useContext } from 'react';
import { Tasks } from '../../components/Tasks';
import { TasksContext } from '../../TasksContext';
import styles from './homePage.module.css';

const HomePage = () => {
  const { tasks, user, settingsData } = useContext(TasksContext);
  const filteredTasks = tasks.slice(0, 4);
  return (
    <div>
      <h3 className={styles.welcome}>
        Hello {settingsData && settingsData.userName}! Today is{' '}
        {new Date().toLocaleDateString()}
      </h3>
      {/* <Header /> */}
      <Tasks tasks={filteredTasks} />
    </div>
  );
};

export default HomePage;
