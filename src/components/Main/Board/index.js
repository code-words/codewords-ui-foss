import React, {Component} from 'react';
import {words} from '../../../mock/mockData';

const Board = ({ pType }) => {
  let status = "Active";
  
  return (
    <section className="Board">
      <h2 className="turn-status">
        Agent Status:
        <span className={status}> {status}</span>
      </h2>
      <div className="gameboard">
        {words.map(w => {
          return (
            <div className="case-file" key={`${w}-file`}>
              <div className="case-title" key={`${w}-title`}>
                <p className="word-txt" key={`${w}-txt`}>{w}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Board;