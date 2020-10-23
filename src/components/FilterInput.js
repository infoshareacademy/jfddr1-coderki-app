import React, { useState } from 'react';
import search from '../img/search.svg';
import styles from './FilterInput.module.css';

const FilterInput = ({ onFilterSave }) => {
  const [filter, setFilter] = useState('');
  return (
    <div>
      <label>Search task by phrase:</label>
      <div style={{ display: 'flex', height: 40 }}>
        <input
          name="searchField"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ width: '98%', height: 20 }}
        />
        <button
          type="submit"
          onClick={() => onFilterSave(filter)}
          className={styles.searchButton}
        >
          <img
            src={search}
            alt="icon of search lens"
            className={styles.searchIcon}
          />
        </button>
      </div>
    </div>
  );
};

export default FilterInput;
