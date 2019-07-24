import React from 'react';
import Card from '../Board/Card';

const Board = props => {
	const { isActive, cardData, sendGuess, userName } = props;
	const status = isActive ? 'Active' : 'Inactive';

	return (
		<section className="Board">
			<h2 className="turn-status">
				Agent ({userName.toUpperCase()}) Status:
				<span className={status}> {status}</span>
			</h2>
			<div className="gameboard">
				{cardData.map(card => (
					<Card 
						card={card} 
						key={card.word} 
						id={card.id} 
						isHover={props.isActive && !props.isIntel} 
						isActive={isActive} 
						sendGuess={sendGuess} />
				))}
			</div>
		</section>
	);
};

export default Board;
