import React, { useState } from 'react';
import { Tasks } from '../../components/Tasks';
import ClearFiltersBtn from './components/ClearFiltersBtn';
import CategoryTagsList from './components/CategoryTagsList';
import StatusTagsList from './components/StatusTagsList';
import Filters from './components/Filters';

const TasksPage = () => {
  const [filtered, setFiltered] = useState([]);

  return (
    <div style={{ position: 'absolute', height: '760px', width: '100%' }}>
      <div
        style={{
          position: 'absolute',
          height: '25%',
          top: '5px',
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Filters setFiltered={setFiltered} />
        <CategoryTagsList />
        <StatusTagsList />
        <ClearFiltersBtn />
      </div>
      <div
        style={{
          width: '100%',
          position: 'absolute',
          height: '48%',
          top: '320px',
          overflowY: 'auto',
        }}
      >
        <Tasks tasks={filtered} />
      </div>
    </div>
  );
};

export default TasksPage;
