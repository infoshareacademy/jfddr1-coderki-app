import React, { useContext } from 'react';
import { TasksContext } from '../../../TasksContext';

const ClearFiltersBtn = () => {
  const { clearActiveTags } = useContext(TasksContext);
  return (
    <div style={{ textAlign: 'center' }}>
      <button
        style={{
          margin: 10,
          fontWeight: 'bold',
          borderRadius: 5,
          width: 200,
        }}
        onClick={(event) => clearActiveTags(event)}
      >
        CLEAR FILTERS
      </button>
    </div>
  );
};

export default ClearFiltersBtn;
