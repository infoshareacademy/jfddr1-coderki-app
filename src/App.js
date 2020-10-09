import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = () => <div>To jest nagłówek</div>;
const Main = () => <div>To jest nagłówek</div>;
const Footer = () => <div>To jest nagłówek</div>;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header />
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
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
