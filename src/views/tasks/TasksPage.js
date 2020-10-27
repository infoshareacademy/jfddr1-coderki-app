import React, { useContext } from 'react';
// import FiltersContainer from '../../components/FiltersContainer';
import { TasksList } from '../../components/TasksList';
// import styles from './TasksPage.module.css';npm start
import { DataContext } from '../../context';

const TasksPage = () => {
  const {
    selectedFilters,
    setSelectedFilters,
    tasks,
  } = useContext(DataContext);

  console.log('tasks', tasks);
  console.log('selected filters', selectedFilters);

  // Very simplified, do not use as is
  const toggleFilter = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(
        selected => selected !== filter
      ));
    } else {
      setSelectedFilters([...selectedFilters, filter])
    }
  };

  return (
    <div style={{ background: '#FFE5D6' }}>
      {/* <FiltersContainer /> */}
      {/* kinda filters below */}
      <button onClick={() => toggleFilter('one')}>filterone</button>
      <button onClick={() => toggleFilter('two')}>filtertwo</button>

      <TasksList />
    </div>
  );
};

export default TasksPage;
