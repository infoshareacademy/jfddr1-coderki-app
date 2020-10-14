import React from 'react';
import './App.css';
// import Auth from './views/Auth';
import AppRouter from './AppRouter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppRouter />
      </header>
    </div>
  );
}

export default App;
