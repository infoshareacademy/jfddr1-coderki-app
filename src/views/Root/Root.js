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

function Root() {
  return (
    <BrowserRouter>
      <div className="App" style={{ height: '100%' }}>
        <Switch>
          <Route path="/home">
            <Header children="Home" />
            <Menu />
            <HomePage />
          </Route>
          <Route path="/calendar">
            <Header children="Calendar" />
            <Menu />
            <CalendarPage />
          </Route>
          <Route path="/addTask">
            <Header children="Create new task" />
            <AddTask />
            <Menu />
          </Route>
          <Route path="/tasks">
            <Header children="Tasks" />
            <Menu />
            <TasksPage />
          </Route>
          <Route path="/settings">
            <Header children="Settings" />
            <SettingsPage />
            <Menu />
          </Route>
          <Route path="/">
            <Menu />
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Root;
