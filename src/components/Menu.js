import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Menu = () => {
  return (
    <nav>
      <NavLink to="/auth" activeClassName={styles.activeLink}>
        Auth
      </NavLink>
      <NavLink to="/home" activeClassName={styles.activeLink}>
        Home
      </NavLink>
      <NavLink to="/calendar" activeClassName={styles.activeLink}>
        Calendar
      </NavLink>
      <NavLink to="/tasks" activeClassName={styles.activeLink}>
        Tasks
      </NavLink>
      <NavLink to="/settings" activeClassName={styles.activeLink}>
        Settings
      </NavLink>
    </nav>
  );
};

export default Menu;
