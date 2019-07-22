import React from 'react';

const CardBack = ({ word, type }) => {
  const url = `../../../../images/${type}.jpg`;

  return (
    <article
      className="card"
      key={`${word}-file`}
      style={{ backgroundImage: `url(${url})` }}
    >
    </article>
  );
};

export default CardBack;