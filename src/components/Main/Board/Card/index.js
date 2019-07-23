import React from 'react';

class Card extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      flipped: false
    }
	}

  handleClick = e => {
    this.setState({ flipped: !this.state.flipped })
    console.log(e.target)
    this.props.sendGuess({ id: e.target.id });
	};

	render() {
		const { card, isActive } = this.props;

		const intelCls = card.type ? card.type : '';
		// const clickCls = !card.type && isActive ? 'clickable' : null;
		const img = card.type ? require(`../../../../images/${card.type}.jpg`) : null;

    //replace next line w/ card.flipped when data is updating
		const content = this.state.flipped ? (
      <article className="card" key={`${card.word}`} id={card.id}>
				<img className="card" src={img} />
			</article>
		) : (
			<article
				className={`card front ${intelCls} clickable`}
				key={`${card.word}`}
				id={card.id}
				name={card.word}
				onClick={this.handleClick}>
				<div className="word-bg" key={`${card.word}-bg`}>
					<p className="word-txt" key={`${card.word}-txt`}>
						{card.word}
					</p>
				</div>
			</article>
		);

		return content;
	}
}

export default Card;
