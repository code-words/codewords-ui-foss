import React from 'react';
import {words} from '../../../mock/mockData';

const Board = props => {
  let status = "Active";

  console.log('Board Props', props)
  
  return (
    <section className="Board">
      <h2 className="turn-status">
        Agent Status:
        <span className={status}> {status}</span>
      </h2>
      <div className="gameboard">
        {props.data && props.data.map(card => {
          const intelClass = card.type ? card.type : '';

          return (
            <article className={`case-file ${intelClass}`} key={`${card}-file`}>
              <div className="case-title" key={`${card}-title`}>
                <p className="word-txt" key={`${card}-txt`}>{card}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Board;