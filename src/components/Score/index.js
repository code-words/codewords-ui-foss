import React from 'react';

const Score = props => {
  const scoreClass = props.team === 1 ? "blue-score" : "red-score";
  return (
    <article className={`Score ${scoreClass}`}>
      <h3 className="score-heading">Team {props.team} Score</h3>
      <p className="score-count">{props.score}</p>
      <p className="player-name">{props.players[0]}</p>
      <p className="player-name">{props.players[1]}</p>
    </article>
  );
};

export default Score;