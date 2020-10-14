import React from 'react';
import styles from './Auth.module.css';

const Header = () => {
  return (
    <div>
      <h2>Home Manager</h2>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <h2>This will be a footer</h2>
    </div>
  );
};

const Auth = () => {
  return (
    <div className={styles.container}>
      <Header />
      <form className={styles.authForm}>
        <label>Email</label>
        <input type="email" name="email" />
        <label>Password</label>
        <input type="password" name="password" />
        <label>Confirm password</label>
        <input type="password" name="password" />
        <button>Login</button>
      </form>
      <div>
        <p>
          You do not have an account?
          <a href="#" target="_blank">
            Register
          </a>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Auth;
