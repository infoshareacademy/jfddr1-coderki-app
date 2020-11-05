import React, { useContext } from 'react';
import { Tasks } from '../../components/Tasks';
import { TasksContext } from '../../TasksContext';

const HomePage = () => {
  const { tasks, user, settingsData } = useContext(TasksContext);
  const filteredTasks = tasks.slice(0, 4);
  return (
    <>
      <h2>
        Hello {settingsData && settingsData.userName}! Today is{' '}
        {new Date().toLocaleDateString()}
      </h2>
      {/* <Header /> */}
      <Tasks tasks={filteredTasks} />
    </>
  );
};

export default HomePage;
