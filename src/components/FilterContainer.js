import React from 'react';
import search from '../img/search.svg';
import styles from './FilterContainer.module.css';

const FilterContainer = () => {
  return (
    <div style={{ padding: '10px 5px 5px 5px' }}>
      <label>Search task by phrase:</label>
      <div style={{ display: 'flex', height: 40 }}>
        <input name="searchField" style={{ width: '98%', height: 20 }} />
        <button type="submit" className={styles.searchButton}>
          <img
            src={search}
            alt="icon of search lens"
            className={styles.searchIcon}
          />
        </button>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          <label>Filter by categories: </label>
          <select name="categories" style={{ fontFamily: 'Quicksand' }}>
            <option value="placeholder"></option>
            <option value="education">Education</option>
            <option value="sport">Sport</option>
            <option value="duties">House duties</option>
            <option value="relax">Relax</option>
            <option value="meeting">Meeting</option>
            <option value="appointment">Appointment</option>
            <option value="work">Work</option>
          </select>
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Filter by status: </label>
          <select name="categories" style={{ fontFamily: 'Quicksand' }}>
            <option value="placeholder"></option>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="someday">Someday</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <h2
          style={{
            textAlign: 'center',
            marginBottom: 5,
            paddingBottom: 3,
          }}
        >
          All tasks
        </h2>
      </div>
    </div>
  );
};

export default FilterContainer;
