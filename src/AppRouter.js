import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import AuthPage from './views/auth/AuthPage';
import Menu from './components/Menu';
import Header from './components/Header';
import HomePage from './views/home/HomePage';
import CalendarPage from './views/calendar/CalendarPage';
import AddTask from './views/tasks/NewTasksPage';
import TasksPage from './views/tasks/TasksPage';
import SettingsPage from './views/settings/SettingsPage';
import logo from './img/logo.png';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/auth">
            <Link to="/">
              <img
                src={logo}
                style={{ width: '100%', borderRadius: 10, paddingBottom: 30 }}
                alt="Logo"
              />
            </Link>
            <AuthPage />
          </Route>
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
};

export default AppRouter;
