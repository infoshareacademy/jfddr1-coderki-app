import React, { useContext } from 'react';
import { Tasks } from '../../components/Tasks';
import { TasksContext } from '../../TasksContext';

const HomePage = () => {
  const { tasks } = useContext(TasksContext);
  const filteredTasks = tasks.slice(0, 4);
  return (
    <>
      {/* <Header /> */}
      <Tasks tasks={filteredTasks} />
    </>
  );
};

export default HomePage;
