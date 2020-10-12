import React from 'react';
import './App.css';
import Auth from './views/Auth';
import Home from './views/Home';
import Calendar from './views/Calendar';
import Settings from './views/Settings';
import Tasks from './views/Tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Auth />
        <Home />
        <Calendar />
        <Tasks />
        <Settings />
      </header>
    </div>
  );
}

export default App;
