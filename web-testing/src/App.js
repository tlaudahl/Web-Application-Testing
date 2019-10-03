import React, { useState } from 'react';
import './App.css';

export const addBalls = currentBalls => {
  if (currentBalls === 3) {
    return currentBalls = 0;
  } else {
    return currentBalls + 1
  }
}

export const addStrike = currentStrikes => {
  if (currentStrikes === 2) {
    return 0;
  } else {
    return currentStrikes + 1;
  }
}

export const addFoulBall = currentStrikes => {
  if (currentStrikes === 2) {
    return currentStrikes
  } else {
    return currentStrikes + 1;
  }
}


function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  const [hit, setHit] = useState('');
  const [atBat, setAtBat] = useState('Travis');

  const batters = [
    'Rueben',  
    'Leilani',
    'Cyrus', 
    'Skye',
    'Ardelle',
    'Trudi',
    'Janine',
    'Walton',
    'Corrie',
    'Hallie',
    'Dori',
    'Toney',
    'Milo',
    'Rebbecca',
    'Rochell',
    'Daria',
    'Charise',
    'Emely',
    'Chasity',
    'Vannessa']

    const getRandomBatter = () => {
      return Math.floor(Math.random() * 20);
    }

  const handlePitch = () => {
    const swing = Math.floor(Math.random() * 4) + 1;
    switch(swing) {
      case 1:
      // Ball
        if (balls === 3) {
          setHit('Walk!')
          setBalls(addBalls(balls));
          setStrikes(addStrike(strikes));
          setAtBat(batters[getRandomBatter()])
          break;
        } else {
          setBalls(addBalls(balls));
          setHit('Ball')
          break;
        }
      // Strike
      case 2:
        if (strikes === 2) {
          setHit('Strike! - Strike out!')
          setStrikes(addStrike(strikes));
          setBalls(0);
          setAtBat(batters[getRandomBatter()])
          break;
        } else {
          setStrikes(addStrike(strikes));
          setHit('Strike!')
          break;
        }
      // Foul Ball
      case 3:
        if (strikes === 2) {
          setHit('Foul Ball!')
          break;
        } else {
          setStrikes(addStrike(strikes));
          setHit('Foul Ball!')
          break;
        }
      // Hit the ball
      case 4:
        setStrikes(0);
        setBalls(0);
        setHit('Nice hit!')
        setAtBat(batters[getRandomBatter()])
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <h1>At Bat: {atBat}</h1>
      <h2>Balls: {balls}</h2>
      <h2>Strikes: {strikes}</h2>
      <h3>{hit}</h3>
      <button onClick={handlePitch}>Pitch!</button>
    </div>
  );
}

export default App;
