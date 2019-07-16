import React from 'react';
import { NavLink } from 'react-router-dom';

const StartScreen = () => {
  return (
    <nav className="StartScreen">
      <NavLink to="/newGame">Start New Game</NavLink>
      <NavLink to="/joinGame">Join Game</NavLink>
      <NavLink to="/ruleList">View Rule List</NavLink>
    </nav>
  )
}

export default StartScreen;