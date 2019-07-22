import React from 'react';

const CardFront = ({ card, isActive }) => {
  const intelClass = card.type ? card.type : '';
  const clickClass = !card.type && isActive ? 'clickable' : null;

  return (
    <article className={`card CardFront ${intelClass} ${clickClass}`} key={`${card.word}`}>
      <div className="word-bg" key={`${card.word}-bg`}>
        <p className="word-txt" key={`${card.word}-txt`}>{card.word}</p>
      </div>
    </article>
  )
};

export default CardFront;