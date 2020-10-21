import React, { useState } from 'react';
import Footer from '../../components/Footer';
import styles from './AuthPage.module.css';

const AuthPage = () => {
  const [showRepeatPassword, setShowRepeatPassword] = useState(true);

  return (
    <>
      <div className={styles.container}>
        <form className={styles.authForm}>
          <label>Email </label>
          <input type="email" name="email" placeholder="Enter Email" />
          <label>Password </label>
          <input type="password" name="password" placeholder="Enter Password" />
          {showRepeatPassword && (
            <div>
              <label>Confirm password </label>
              <input
                type="password"
                name="password-repeat"
                placeholder="Repeat Password"
              />
            </div>
          )}
          <button type="submit" className={styles.registerbtn}>
            {showRepeatPassword ? 'Register' : 'Login'}
          </button>
        </form>
        <div className={styles.signin}>
          <p>
            {showRepeatPassword
              ? 'Already have an account? '
              : "Don't have an account yet? "}
            <a
              href="#"
              onClick={() => setShowRepeatPassword(!showRepeatPassword)}
            >
              {showRepeatPassword ? 'Sign in' : 'Register'}
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
