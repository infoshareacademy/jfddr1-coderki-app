import React, { useState } from 'react';
import FilterInput from './FilterInput';
// import search from '../img/search.svg';
// import styles from './FiltersContainer.module.css';

const FiltersContainer = () => {
  return (
    <div style={{ padding: '10px 5px 5px 5px' }}>
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
            <option value="open">Open</option>
            <option value="inProgress">In progress</option>
            <option value="someday">Someday</option>
            <option value="closed">Closed</option>
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

export default FiltersContainer;