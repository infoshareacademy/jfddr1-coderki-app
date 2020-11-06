import React, { useContext } from 'react';
import { TasksContext } from '../../../TasksContext';
import styles from './Filters.module.css';

const ClearFiltersBtn = () => {
  const { clearActiveTags } = useContext(TasksContext);
  return (
    <div style={{ textAlign: 'center' }}>
      <button
        className={styles.clearFiltersBtn}
        onClick={(event) => clearActiveTags(event)}
      >
        CLEAR FILTERS
      </button>
    </div>
  );
};

export default ClearFiltersBtn;
