import React from 'react';

const CardFront = ({ word }) => {
  return (
    <article className="case-file" key={`${word}-file`}>
      <div className="word-bg" key={`${word}-bg`}>
        <p className="word-txt" key={`${word}-txt`}>{word}</p>
      </div>
    </article>
  );
};

export default CardFront;