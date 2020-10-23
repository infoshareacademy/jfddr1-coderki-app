import React from 'react';
// import FiltersContainer from '../../components/FiltersContainer';
import { TasksList } from '../../components/TasksList';
// import styles from './TasksPage.module.css';npm start

const TasksPage = () => {
  return (
    <div style={{ background: '#FFE5D6' }}>
      {/* <FiltersContainer /> */}
      <TasksList />
    </div>
  );
};

export default TasksPage;
