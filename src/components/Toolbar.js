import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';

const Toolbar = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleRate = (rating) => {
    console.log(`Rated ${selectedMovie} ${rating} stars`);
  };

  return (
    <div className="toolbar">
      <select onChange={handleMovieChange} value={selectedMovie}>
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
      <RateMovieButton movie={selectedMovie} onRate={handleRate} />
    </div>
  );
};

export default Toolbar;
