import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './views/Login';
// import Home from './views/Home';
import Calendar from './views/Calendar';
// import Settings from './views/Settings';
import Tasks from './views/Tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Login />
        <Calendar />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <Register /> */}
        <Tasks />
      </header>
    </div>
  );
}

export default App;
