import React, { useState, useEffect, useContext } from 'react';
import SignInForm from '../SignInForm.js/SignInForm';
import Footer from './components/Footer';
import { UserContext } from '../../UserContext';
import logo from '../../img/logo.png';
import styles from './AuthGuard.module.css';

import 'firebase/auth';

const Cover = () => {
  return (
    <>
      <img
        src={logo}
        style={{ width: '100%', borderRadius: 10, paddingBottom: 30 }}
        alt="Logo"
      />
      <div className={styles.container}>
        <SignInForm />
      </div>
      <Footer />
    </>
  );
};

function AuthGuard({ children }) {
  const { isLoggedIn } = useContext(UserContext);
  return isLoggedIn ? children : <Cover />;
}

export default AuthGuard;

{
  /* <Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>; */
}
