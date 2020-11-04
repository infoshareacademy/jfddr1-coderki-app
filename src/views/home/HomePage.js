import React, { useContext } from 'react';
import { Tasks } from '../../components/Tasks';
import { TasksContext } from '../../TasksContext';

const HomePage = () => {
  const { tasks } = useContext(TasksContext);
<<<<<<< HEAD
  return (
    <>
      {/* <Header /> */}
      <Tasks tasks={tasks} />
=======
  const filteredTasks = tasks.slice(0, 4);
  return (
    <>
      {/* <Header /> */}
      <Tasks tasks={filteredTasks} />
>>>>>>> master
    </>
  );
};

export default HomePage;
