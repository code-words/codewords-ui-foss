import React from 'react';
import Card from '../Board/Card';

const Board = props => {
	const { isActive, cardData, sendGuess } = props;
	const status = isActive ? 'Active' : 'Inactive';

	return (
		<section className="Board">
			<h2 className="turn-status">
				Agent Status:
				<span className={status}>{status}</span>
			</h2>
			<div className="gameboard">
				{cardData.map(card => (
					<Card card={card} key={card.word} id={card.id} isActive={isActive} sendGuess={sendGuess} />
				))}
			</div>
		</section>
	);
};

export default Board;
