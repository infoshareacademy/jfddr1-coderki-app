import React from 'react';
import FilterContainer from '../../components/FilterContainer';
import { TasksList } from '../../components/TasksList';
// import styles from './TasksPage.module.css';npm start

const TasksPage = () => {
  return (
    <div style={{ background: '#FFE5D6' }}>
      <FilterContainer />
      <TasksList />
    </div>
  );
};

export default TasksPage;
