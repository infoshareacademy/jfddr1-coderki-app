import React from 'react';

const Navigation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <a href="#">Home</a>
      <a href="#">Calendar</a>
      <a href="#">Tasks</a>
      <a href="#">Settings</a>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Home;
