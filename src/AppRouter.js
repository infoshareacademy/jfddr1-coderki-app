import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import styles from './AppWithRouting.module.css';
import Auth from './components/Auth';
import Menu from './components/Menu';
import HomePage from './views/HomePage';
import CalendarPage from './views/CalendarPage';
import TasksPage from './views/TasksPage';
import SettingsPage from './views/SettingsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <div>
        <Auth />
        <Switch>
          <Route path="/home">
            <Menu />
            <HomePage />
          </Route>
          <Route path="/calendar">
            <Menu />
            <CalendarPage />
          </Route>
          <Route path="/tasks">
            <Menu />
            <TasksPage />
          </Route>
          <Route path="/settings">
            <Menu />
            <SettingsPage />
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
