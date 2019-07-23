import React from 'react';

class Card extends React.Component {
	constructor(props) {
    super(props);

	}

  handleClick = e => {
    if (this.props.isActive && !this.props.card.type) {
      this.props.sendGuess({ id: e.currentTarget.id });
    }
	};

	render() {
    const { card, isActive } = this.props;
    const { type, flipped, word, id } = card;
		const intelCls = type ? type : '';
		const clickCls = !type && isActive && !flipped ? 'clickable' : null;
		const img = type ? require(`../../../../images/${type}.jpg`) : null;

		const content = flipped ? (
      <article className="card" key={`${word}`} id={id}>
				<img className="card" src={img} alt={type} />
			</article>
		) : (
			<article
				className={`card front ${intelCls} ${clickCls}`}
				key={`${word}`}
				id={id}
				name={word}
				onClick={this.handleClick}>
				<div className="word-bg" key={`${word}-bg`}>
					<p className="word-txt" key={`${word}-txt`}>
						{word}
					</p>
				</div>
			</article>
		);

		return content;
	}
}

export default Card;
