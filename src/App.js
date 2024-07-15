import React from 'react';
import Toolbar from './components/Toolbar';
import './App.css';

const App = () => {
  const movies = ['Movie 1', 'Movie 2', 'Movie 3'];

  return (
    <div className="App">
      <Toolbar movies={movies} />
    </div>
  );
};

export default App;
