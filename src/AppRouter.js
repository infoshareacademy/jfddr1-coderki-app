import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import styles from './AppRouter.module.css';
import AuthPage from './views/AuthPage';
import Menu from './components/Menu';
import HomePage from './views/HomePage';
import CalendarPage from './views/CalendarPage';
import TasksPage from './views/TasksPage';
import SettingsPage from './views/SettingsPage';
import logo from './img/logo.png';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Link to="/">
        <div>
          <img src={logo} className={styles.logo} alt="Logo" />
        </div>
      </Link>
      <div>
        <Switch>
          <Route path="/auth">
            <Menu />
            <AuthPage />
          </Route>
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
