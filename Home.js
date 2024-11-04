import React, { useState } from 'react';
import './Home.css';

function Home() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    setAttempts(attempts + 1);
    if (guessedNumber < number) {
      setFeedback('Too low!');
    } else if (guessedNumber > number) {
      setFeedback('Too high!');
    } else {
      setFeedback(`Correct! You guessed it in ${attempts + 1} attempts.`);
    }
  };

  const resetGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <div className="home-container">
      <h1>Welcome to the Pargol Mystery Number Guessing Game!</h1>
      <p>Try your luck with Pargol !</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Submit Guess</button>
      <p>{feedback}</p>
      {feedback.includes('Correct') && <button onClick={resetGame}>Play Again</button>}
    </div>
  );
}

export default Home;
