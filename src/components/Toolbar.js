import React, { useState } from 'react';
import RateMovieButton from './RateMovieButton';
import UploadButton from './UploadButton'; 

const Toolbar = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  const handleRate = (rating) => {
    console.log(`Rated ${selectedMovie} ${rating} stars`);
  };

  const handleUpload = () => {
    alert('Uploading image...'); // Placeholder for actual upload logic
    // Implement actual upload logic here
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
      <UploadButton onUpload={handleUpload} />
    </div>
  );
};

export default Toolbar;
