import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);

  }

  handleClick = e => {
    this.props.sendGuess(e.target.id);
  }

  render() {
    const { card, isActive } = this.props;

    const intelCls = card.type ? card.type : '';
    // const clickCls = !card.type && isActive ? 'clickable' : null;
    const img = card.type ? require(`../../../../images/${card.type}.jpg`) : null;
    
    const content = card.flipped
    ? <article className="card" key={`${card.word}`}>
        <img className="card" src={img}/>
      </article>
      : <article
          className={`card front ${intelCls} clickable`}
          key={`${card.word}`}
          id={card.id}
          name={card.word}
          onClick={this.handleClick}
        >
          <div className="word-bg" key={`${card.word}-bg`}>
            <p className="word-txt" key={`${card.word}-txt`}>{card.word}</p>
          </div>
        </article>

    return content;
  }
};

export default Card;