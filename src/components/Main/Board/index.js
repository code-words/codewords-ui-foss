import React, {Component} from 'react';
import { words } from '../../../mock/mockData';
import ReactCardFlip from 'react-card-flip';
import CardFront from '../Board/CardFront';
import CardBack from '../Board/CardBack';



const Board = ({ pType }) => {
  let status = "Active";
  let flipped = true;
  
  return (
    <section className="Board">
      <h2 className="turn-status">
        Agent Status:
        <span className={status}> {status}</span>
      </h2>
      <div className="gameboard">
        {words.map(w => {
          return flipped ? 
            <CardFront key="front" word={w} />   
            : <CardBack key="back" word={w} /> 
        })}
      </div>
    </section>
  )
}

export default Board;