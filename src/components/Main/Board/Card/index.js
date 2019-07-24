import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      flipped: false
    };
  }

  handleClick = e => {
    this.setState({ flipped: !this.state.flipped });
    this.props.sendGuess(e.target.id);
  };

  render() {
    const { card, isActive } = this.props;

    const intelCls = card.type ? card.type : "";
    // const clickCls = !card.type && isActive ? 'clickable' : null;
    const img = card.type
      ? require(`../../../../images/${card.type}.jpg`)
      : null;

    //replace next line w/ card.flipped when data is updating
    const content = this.state.flipped ? (
      <article className="card" key={`${card.word}`}>
        <img alt={"a card with one word on it"} className="card" src={img} />
      </article>
    ) : (
      <article
        className={`card front ${intelCls} clickable`}
        key={`${card.word}`}
        id={card.id}
        name={card.word}
        onClick={this.handleClick}
      >
        <div className="word-bg" key={`${card.word}-bg`}>
          <p className="word-txt" key={`${card.word}-txt`}>
            {card.word}
          </p>
        </div>
      </article>
    );
=======

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
>>>>>>> 882a23a59225e6729fe0c85f0d45b37fc5ee4004

    return content;
  }
}

export default Card;
