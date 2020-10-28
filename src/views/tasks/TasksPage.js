import React, { useState, useContext } from 'react';
import styles from './components/FilterInput.module.css';
import { TasksContext } from '../../TasksContext';

// import React, { useContext } from 'react';
// import FiltersContainer from '../../components/FiltersContainer';
import { Tasks } from '../../components/Tasks';
// import { TasksContext } from '../../TasksContext';

// import styles from './TasksPage.module.css';npm start

const TasksPage = ({ onCategorySelect }) => {
  const { tasks } = useContext(TasksContext);
  const [filter, setFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  //  const [filters, setFilters] = useState({
  //   byTitle: '',
  //   byCategory: '',
  // });

  const tasksFilteredByTitle = (tasks) => {
    return tasks.filter((task) =>
      task.title.toLowerCase().includes(filter.toLowerCase())
    );
  };

  // const tasksFilteredByCategory = tasksFilteredByTitle.filter((task) => {
  //   console.log(task);
  //   task.category.toLowerCase().includes(filters.byCategory.toLowerCase());
  // });

  return (
    <div style={{ background: '#FFE5D6' }}>
      <div>
        <label>Search task by phrase:</label>
        <div style={{ display: 'flex', height: 40 }}>
          <input
            name="searchField"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ width: '98%', height: 20 }}
          />
        </div>
      </div>
      <div>
        <div style={{ marginTop: 10 }}>
          <label>Filter by categories: </label>
          <select
            name="category"
            style={{ fontFamily: 'Quicksand' }}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
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
        </div>
        <div style={{ marginTop: 10 }}>
          <label>Filter by status: </label>
          <select
            name="status"
            style={{ fontFamily: 'Quicksand' }}
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
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

      <Tasks tasks={tasksFilteredByTitle(tasks)} />
    </div>
  );
};

export default TasksPage;

// import React, { useState, useContext } from 'react';
// // import styles from './TaskContainer.module.css';
// import { TaskContainer } from './TaskContainer';
// import styles from './TasksList.module.css';
// import FilterInput from './FilterInput';
// import CategoryFilter from './CategoryFilter';
// import { TasksContext } from '../TasksContext';

// export const TasksList = () => {
//   const { tasks } = useContext(TasksContext);
//   const [filters, setFilters] = useState({
//     byTitle: '',
//     byCategory: '',
//   });

//   const tasksFilteredByTitle = tasks.filter((task) =>
//     task.title.toLowerCase().includes(filters.byTitle.toLowerCase())
//   );

//   const tasksFilteredByCategory = tasksFilteredByTitle.filter((task) => {
//     console.log(task);
//     task.category.toLowerCase().includes(filters.byCategory.toLowerCase());
//   });

//   return (
//     <div style={{ padding: '10px 5px 5px 5px' }}>
//       <FilterInput
//         onFilterSave={(value) => setFilters({ ...filters, byTitle: value })}
//       />
//       <CategoryFilter
//         onCategorySelect={(value) =>
//           setFilters({ ...filters, byCategory: value })
//         }
//       />
//       <div>
//         <div style={{ marginTop: 10 }}>
//           <label>Filter by status: </label>
//           <select name="categories" style={{ fontFamily: 'Quicksand' }}>
//             <option value="placeholder"></option>
//             <option value="all">All</option>
//             <option value="open">Open</option>
//             <option value="inProgress">In progress</option>
//             <option value="someday">Someday</option>
//             <option value="closed">Closed</option>
//           </select>
//         </div>
//         <h2
//           style={{
//             textAlign: 'center',
//             marginBottom: 5,
//             paddingBottom: 3,
//           }}
//         >
//           All tasks
//         </h2>
//       </div>
//       <div className={styles.tasksContainer}>
//         <TaskContainer tasks={tasksFilteredByCategory} />
//       </div>
//     </div>
//   );
// };
