import React from 'react';

const CardBack = ({ word, type }) => {
  return (
    <article className="case-file" key={`${word}-file`}>
      <div className="word-bg" key={`${word}-bg`}>
        <p className="word-txt" key={`${word}-txt`}>TEST</p>
      </div>
    </article>
  );
};

export default CardBack;