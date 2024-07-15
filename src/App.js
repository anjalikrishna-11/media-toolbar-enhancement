import React from 'react';
import Toolbar from './components/Toolbar';
import './App.css';

const App = () => {
  const movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Dark Knight',
    'Pulp Fiction',
    'Forrest Gump'
  ];

  return (
    <div className="App">
      <Toolbar movies={movies} />
    </div>
  );
};

export default App;

