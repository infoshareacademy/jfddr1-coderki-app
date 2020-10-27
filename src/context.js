import React, { useEffect, useState } from 'react';

export const DataContext = React.createContext();
DataContext.displayName = 'DataStore';

function DataContextProvider({ children }) {
  // You can use many small states here, however
  // one useReducer would be much better, but
  // for simplicity I use useState() with only one value.
  const [tasks, setTasks] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState(['one', 'two'])

  useEffect(() => {
    // let's say we call Firebase here, then
    setTasks(['raz', 'dwa', 'trzy']);
  }, []);

  // This is a simple solution not optimized, but for
  // simplicity... ;)
  const values = {
    tasks,
    selectedFilters,
    setSelectedFilters,
  };

  return (
    <DataContext.Provider value={values}>
      {children}
    </DataContext.Provider>
  );
}

export default DataContextProvider;

// go to TaskPage
