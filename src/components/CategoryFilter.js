import React, { useState } from 'react';

//dopracować, że jeśli żadna categoria nie zostala nadana to i tak filtruje
//przenieść filtr na zdarzenie wybrania opcji a nie na kliknięcie w przycisk
const CategoryFilter = ({ onCategorySelect }) => {
  const [selectedOption, setSelectedOption] = useState('');

  return (
    <div style={{ marginTop: 10 }}>
      <label>Filter by categories: </label>
      <select
        name="category"
        style={{ fontFamily: 'Quicksand' }}
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option></option>
        <option value="education">Education</option>
        <option value="sport">Sport</option>
        <option value="duties">House duties</option>
        <option value="relax">Relax</option>
        <option value="meeting">Meeting</option>
        <option value="appointment">Appointment</option>
        <option value="work">Work</option>
      </select>
      <button
        type="submit"
        style={{ width: 100, height: 30, fontSize: 10 }}
        onClick={() => onCategorySelect(selectedOption)}
      >
        Filtruj
      </button>
    </div>
  );
};

export default CategoryFilter;
