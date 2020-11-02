import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const initialState = {
  email: '',
  password: '',
};

function SignInForm() {
  const [formState, setFormState] = useState(initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formState;
    firebase.auth().signInWithEmailAndPassword(email, password);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div
      style={{
        border: '1px solid black',
        padding: 10,
        margin: 10,
        borderRadius: 5,
      }}
    >
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <label htmlFor="email">Email </label>
        <input
          id="email"
          name="email"
          autoComplete="current-email"
          value={formState.email}
          onChange={handleChange}
        />

        <br />
        <br />

        <label htmlFor="password">Password </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          value={formState.password}
          onChange={handleChange}
        />

        <br />
        <br />

        <button>Sign in</button>
      </form>
    </div>
  );
}

export default SignInForm;
