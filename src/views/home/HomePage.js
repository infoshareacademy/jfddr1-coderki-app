import React, { useContext } from 'react';
import { Tasks } from '../../components/Tasks';
import { TasksContext } from '../../TasksContext';

const HomePage = () => {
  const { tasks } = useContext(TasksContext);
  return (
    <>
      {/* <Header /> */}
      <Tasks tasks={tasks} />
    </>
  );
};

export default HomePage;
