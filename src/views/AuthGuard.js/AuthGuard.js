import React, { useState, useEffect } from 'react';
import SignInForm from '../SignInForm.js/SignInForm';
import Footer from './components/Footer';
import logo from '../../img/logo.png';
import styles from './AuthGuard.module.css';

import firebase from 'firebase/app';
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const isLoggedIn = user === null ? false : true;
  return isLoggedIn ? children : <Cover />;
}

export default AuthGuard;
