import React from 'react';

const Score = props => {
	const player1 = props.players[0];
	const player2 = props.players[1];
	const scoreClass = props.team === 'blue' ? 'blue-score' : 'red-score';
	const icon = <i className="fas fa-crosshairs" />;

	const isName = (name) => {
		let bool = props.currentPlayer == name ? true : false;
			return bool;
	}

	return (
    <article
      className={`Score ${scoreClass} active-team-${props.isTeamActive}`}
    >
      <h3 className="score-heading">Team Score</h3>
      <p className="score-count">{props.score}</p>
      <p className="player-name">
				{player1.toUpperCase()}
				{isName(player1) ? icon : null}
      </p>
      <p className="player-name">
				{player2.toUpperCase()}
				{isName(player2) ? icon : null}
      </p>
    </article>
  );
};

export default Score;
