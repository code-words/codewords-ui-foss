import React from 'react';
import CardFront from './CardFront';
import CardBack from './CardBack';

class Board extends React.Component {
  constructor(props) {
    super(props);

  }

  handleClick = e => {
    console.log(e.target.id);
  }

  render() {
    const { isActive, cardData } = this.props;
    const status = isActive ? "Active" : "Inactive";
    
    console.log('Board Props', this.props)
    
    return (
      <section className="Board">
      <h2 className="turn-status">
        Agent Status:
        <span className={status}>{status}</span>
      </h2>
      <div className="gameboard">
        {cardData.map(card => {
          if (card.flipped) return <CardBack
            type={card.type}
            key={card.word}
            id={card.id}
          />
          
          return <CardFront
            card={card}
            key={card.word}
            id={card.id}
            isActive={isActive}
            onClick={this.handleClick}
          />
        })}
      </div>
    </section>
  )
}
}

export default Board;