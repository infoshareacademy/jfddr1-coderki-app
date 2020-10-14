import React from 'react';
import styles from './AuthPage.module.css';

const Footer = () => {
  return (
    <div>
      <h2>This will be a footer</h2>
    </div>
  );
};

const AuthPage = () => {
  return (
    <>
      <div className={styles.container}>
        <form className={styles.authForm}>
          <label>Email </label>
          <input type="email" name="email" placeholder="Enter Email" />
          <label>Password </label>
          <input type="password" name="password" placeholder="Enter Password" />
          <label>Confirm password </label>
          <input
            type="password"
            name="password-repeat"
            placeholder="Repeat Password"
          />
          <button type="submit" className={styles.registerbtn}>
            Register
          </button>
        </form>
        <div className={styles.signin}>
          <p>
            Already have an account?{' '}
            <a href="#" target="_blank">
              Sign in
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
