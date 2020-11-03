import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../TasksContext';
import { Task } from '../../components/Task';
import ClearFiltersBtn from './components/ClearFiltersBtn';
import CategoryTagsList from './components/CategoryTagsList';
// import TaskList from '../../components/TasksList';

const TasksPage = () => {
  const { tasks, activeTags } = useContext(TasksContext);

  const [filtered, setFiltered] = useState([]);
  console.log('tasksfilter', filtered);

  const compareTags = (taskTags, activeTags) => {
    return activeTags.every((tag) => taskTags.includes(tag));
  };
  return (
    <div>
      <Filters setFiltered={setFiltered} />
      <CategoryTagsList />
      <ClearFiltersBtn />
      {tasks
        .filter((task) => compareTags(task.category, activeTags))
        .map((task) => (
          <Task task={task} />
        ))}
    </div>
  );
};

export default TasksPage;

const Filters = ({ setFiltered }) => {
  const { tasks } = useContext(TasksContext);

  const [phrase, setPhrase] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    const tasksFilteredByTitle = (tasks) => {
      return tasks.filter((task) => {
        return task.title.toLowerCase().includes(phrase.toLowerCase());
      });
    };

    const tasksFilteredByCategory = (tasks) => {
      return tasks.filter((task) => {
        return task.category
          .toLowerCase()
          .includes(selectedCategory.toLowerCase());
      });
    };

    const tasksFilteredByStatus = (tasks) => {
      return tasks.filter((task) => {
        return task.category
          .toLowerCase()
          .includes(selectedStatus.toLowerCase());
      });
    };

    const all = tasksFilteredByStatus(
      tasksFilteredByCategory(tasksFilteredByTitle(tasks))
    );

    console.log('allfilter', all);

    setFiltered(
      tasksFilteredByStatus(
        tasksFilteredByCategory(tasksFilteredByTitle(tasks))
      )
    );
  }, [phrase, selectedCategory, selectedStatus, tasks]);

  return (
    <div style={{ background: '#FFE5D6' }}>
      <div>
        <label>Search task by phrase:</label>
        <div style={{ display: 'flex', height: 40 }}>
          <input
            name="searchField"
            value={phrase}
            onChange={(e) => setPhrase(e.target.value)}
            style={{ width: '98%', height: 20 }}
          />
        </div>
      </div>
      <div>
        {/* <div style={{ marginTop: 10 }}>
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
        </div> */}
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
    </div>
  );
};
