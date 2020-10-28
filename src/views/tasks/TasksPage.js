import React from 'react';
// import React, { useContext } from 'react';
// import FiltersContainer from '../../components/FiltersContainer';
import { TasksList } from '../../components/TasksList';
// import { TasksContext } from '../../TasksContext';

// import styles from './TasksPage.module.css';npm start

const TasksPage = () => {
  //  const { selectedFilters, setSelectedFilters, tasks } = useContext(
  //    TasksContext
  //  );

  //  console.log('tasks', tasks);
  //  console.log('selected filters', selectedFilters);

  //  // Very simplified, do not use as is
  //  const toggleFilter = (filter) => {
  //    if (selectedFilters.includes(filter)) {
  //      setSelectedFilters(
  //        selectedFilters.filter((selected) => selected !== filter)
  //      );
  //    } else {
  //      setSelectedFilters([...selectedFilters, filter]);
  //    }
  //  };
  return (
    <div style={{ background: '#FFE5D6' }}>
      {/* <FiltersContainer /> */}
      {/* <button onClick={() => toggleFilter('one')}>filterone</button>
      <button onClick={() => toggleFilter('two')}>filtertwo</button> */}

      <TasksList />
    </div>
  );
};

export default TasksPage;
