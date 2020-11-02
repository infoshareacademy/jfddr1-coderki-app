import React, { useState, useEffect } from 'react';
import SignUpForm from '../SignUpForm.js/SignUpForm';
import SignInForm from '../SignInForm.js/SignInForm';

import firebase from 'firebase/app';
import 'firebase/auth';

const Cover = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <SignInForm />

      <SignUpForm />
    </div>
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
