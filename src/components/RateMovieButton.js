// U35346496
import React, { useState } from 'react';

const RateMovieButton = ({ movie, onRate }) => {
  const [rating, setRating] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    onRate(rate);
    setConfirmationMessage(`You rated ${movie} ${rate} stars!`);
  };

  return (
    <div>
      <h3>Rate {movie}</h3>
      {[1, 2, 3, 4, 5].map((star) => (
        <button key={star} onClick={() => handleRating(star)}>
          {star} {star <= rating ? '★' : '☆'}
        </button>
      ))}
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default RateMovieButton;
