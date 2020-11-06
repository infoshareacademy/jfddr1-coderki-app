import React, { useState } from 'react';
import { Tasks } from '../../components/Tasks';
import ClearFiltersBtn from './components/ClearFiltersBtn';
import CategoryTagsList from './components/CategoryTagsList';
import StatusTagsList from './components/StatusTagsList';
import Filters from './components/Filters';

const TasksPage = () => {
  const [filtered, setFiltered] = useState([]);
  console.log('tasksfilter', filtered);

  return (
    <div>
      <div style={{ background: '#FFE5D6' }}>
        <Filters setFiltered={setFiltered} />
        <CategoryTagsList />
        <StatusTagsList />
        <ClearFiltersBtn />
      </div>

      <Tasks tasks={filtered} />
    </div>
  );
};

export default TasksPage;
