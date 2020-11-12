import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from '../../components/Menu';
import Header from '../../components/Header';
import HomePage from '../../views/home/HomePage';
import CalendarPage from '../../views/calendar/CalendarPage';
import AddTask from '../../views/tasks/NewTasksPage';
import TasksPage from '../../views/tasks/TasksPage';
import SettingsPage from '../../views/settings/SettingsPage';
import '../../App.css';
import { useContext } from 'react';
import { TasksContext } from '../../TasksContext';

function Root() {
  const { lastClearId } = useContext(TasksContext);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Header children="Home" />
            <HomePage />
            <Menu />
          </Route>
          <Route path="/calendar">
            <Header children="Calendar" />
            <CalendarPage />
            <Menu />
          </Route>
          <Route path="/addTask">
            <Header children="Create new task" />
            <AddTask />
            <Menu />
          </Route>
          <Route path="/tasks">
            <Header children="Tasks" />
            <TasksPage key={lastClearId} />
            <Menu />
          </Route>
          <Route path="/settings">
            <Header children="Settings" />
            <SettingsPage />
            <Menu />
          </Route>
          <Route path="/">
            <Header children="Home" />
            <Menu />
            <HomePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Root;
