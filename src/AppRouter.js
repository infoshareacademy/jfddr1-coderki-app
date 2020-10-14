import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import styles from './AppWithRouting.module.css';
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
        <Menu />
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/calendar">
            <CalendarPage />
          </Route>
          <Route path="/tasks">
            <TasksPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
