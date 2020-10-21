import React from 'react';
// import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ children }) => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.headerTitle}>{children}</h2>
    </div>
  );
};

export default Header;

{
  /* <NavLink to="/auth">Auth</NavLink> */
}
