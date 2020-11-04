import React, { useState, useContext } from 'react';
import SignUpForm from '../SignUpForm.js/SignUpForm';
import { UserContext } from '../../UserContext';

import 'firebase/auth';

const initialState = {
  email: '',
  password: '',
};

function SignInForm() {
  const { logIn } = useContext(UserContext);
  const [showSignInForm, setShowSignInForm] = useState(true);
  const [formState, setFormState] = useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formState;
    logIn(email, password);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      {showSignInForm ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email </label>
          <input
            id="email"
            name="email"
            autoComplete="current-email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />

          <br />

          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="current-password"
            value={formState.password}
            onChange={handleChange}
            placeholder="Enter Password"
          />

          <br />

          <button>Sign in</button>
          <div style={{ textAlign: 'center' }}>
            <p>
              Don't have an account yet?{' '}
              <a
                href="#"
                style={{ color: 'dodgerblue' }}
                onClick={() => setShowSignInForm(!showSignInForm)}
              >
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      ) : (
        <SignUpForm />
      )}
    </div>
  );
}

export default SignInForm;
