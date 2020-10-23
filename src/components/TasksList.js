import React, { useState, useEffect } from 'react';
// import styles from './TaskContainer.module.css';
import { TaskContainer } from './TaskContainer';
import styles from './TasksList.module.css';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import FilterInput from './FilterInput';

export const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const [filters, setFilters] = useState({
    byTitle: '',
  });

  useEffect(() => {
    firebase
      .firestore()
      .collection('tasks')
      .onSnapshot((snapshot) => {
        const tasks = [];

        snapshot.forEach((doc) => {
          tasks.push({
            id: doc.id,
            title: doc.get('title'),
            startTimeData: doc.get('startTime').toDate().toDateString(),
            startTimeTime: doc
              .get('startTime')
              .toDate()
              .toLocaleTimeString('en-US'),
            place: doc.get('place'),
          });
        });
        setTasks(tasks);
      });
  }, []);

  const tasksFilteredByTitle = tasks.filter((task) =>
    task.title.toLowerCase().includes(filters.byTitle.toLowerCase())
  );

  return (
    <div className={styles.tasksContainer}>
      <FilterInput
        onFilterSave={(value) => setFilters({ ...filters, byTitle: value })}
      />
      <TaskContainer tasks={tasksFilteredByTitle} />
    </div>
  );
};

// const filmsData = getFilmsList();

// const FilmsLibrary = () => {
//   const [sortAscending, setSortAscending] = useState(true);
//   const [filters, setFilters] = useState({
//     byTitle: '',
//     byYear: '',
//   });
//   const [filmsAddedByUser, setFilmsAddedByUser] = useState([]);

//   const allFilms = [...filmsData, ...filmsAddedByUser];

//   const filmSortedByTitle = allFilms.filter((film) =>
//     film.Title.toLowerCase().includes(filters.byTitle.toLowerCase())
//   );
//   const filmSortedByYear = filmSortedByTitle.filter((film) =>
//     film.Title.toLowerCase().includes(filters.byYear.toLowerCase())
//   );
//   const sortedFilms = [...filmSortedByYear].sort((film, nextFilm) =>
//     sortAscending ? film.Year - nextFilm.Year : nextFilm.Year - film.Year
//   );

//   return (
//     <>
//       <h1>Films Library</h1>
//       <FilterInput
//         label="Filter by title"
//         onFilterSave={(value) => setFilters({ ...filters, byTitle: value })}
//       />
//       <FilterInput
//         label="Filter by year"
//         onFilterSave={(value) => setFilters({ ...filters, byYear: value })}
//       />
//       <p>Sort:</p>
//       <button onClick={() => setSortAscending(!sortAscending)}>
//         {sortAscending ? 'Ascending' : 'Descending'}
//       </button>
//       <FilmsList title="Films list:" films={sortedFilms} />
//       <AddFilm
//         onAdd={(values) => setFilmsAddedByUser([...filmsAddedByUser, values])}
//       />
//     </>
//   );
// };

// export default FilmsLibrary;
