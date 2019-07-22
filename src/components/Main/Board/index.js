import React from 'react';

const Board = props => {
  const status = props.isActive ? "Active" : "Inactive";

  console.log('Board Props', props)
  
  return (
    <section className="Board">
      <h2 className="turn-status">
        Agent Status:
        <span className={status}>{status}</span>
      </h2>
      <div className="gameboard">
        {props.cardData.map(card => {
          const intelClass = card.type ? card.type : '';

          return (
            <article className={`case-file ${intelClass}`} key={`${card.word}-file`}>
              <div className="case-title" key={`${card.word}-title`}>
                <p className="word-txt" key={`${card.word}-txt`}>{card.word}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Board;