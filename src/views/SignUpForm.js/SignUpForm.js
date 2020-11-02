import React, { useState } from 'react';
import firebase from 'firebase/app';
import SignInForm from '../SignInForm.js/SignInForm';

import 'firebase/auth';

const initialState = {
  email: '',
  password: '',
};

function SignUpForm() {
  const [showSignUpForm, setShowSignUpForm] = useState(true);

  const [formState, setFormState] = useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formState;
    firebase.auth().createUserWithEmailAndPassword(email, password);
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
      {showSignUpForm ? (
        <form onSubmit={handleSubmit}>
          {' '}
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
          <button>Sign up</button>
          <div style={{ textAlign: 'center' }}>
            <p>
              Already have an account?{' '}
              <a
                href="#"
                style={{ color: 'dodgerblue' }}
                onClick={() => setShowSignUpForm(!showSignUpForm)}
              >
                Sign in
              </a>
              .
            </p>
          </div>
        </form>
      ) : (
        <SignInForm />
      )}
    </div>
  );
}

export default SignUpForm;
