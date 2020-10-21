import React from 'react';
import FilterContainer from '../../components/FilterContainer';
import { TasksWithFilter } from '../../components/TasksWithFilter';
import styles from './TasksPage.module.css';

const TasksPage = () => {
  return (
    <div style={{ background: '#FFE5D6' }}>
      <FilterContainer />
      <TasksWithFilter />
    </div>
  );
};

export default TasksPage;
