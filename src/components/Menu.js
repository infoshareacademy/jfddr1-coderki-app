import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';
import home from '../img/home.svg';
import calendar from '../img/calendar.svg';
import checkbox from '../img/checkbox.svg';
import settings from '../img/settings.svg';

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <NavLink to="/auth">Auth</NavLink>
      <NavLink to="/home">
        <img
          src={home}
          className={styles.navItem}
          alt="navigate to home page"
        />
      </NavLink>
      <NavLink to="/calendar" className="Nav-item">
        <img
          src={calendar}
          className={styles.navItem}
          alt="navigate to home page"
        />
      </NavLink>
      <NavLink to="/tasks" className="Nav-item">
        <img
          src={checkbox}
          className={styles.navItem}
          alt="navigate to home page"
        />
      </NavLink>
      <NavLink to="/settings" className="Nav-item">
        <img
          src={settings}
          className={styles.navItem}
          alt="navigate to home page"
        />
      </NavLink>
    </nav>
  );
};

export default Menu;