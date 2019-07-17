import React, {Component} from 'react';
import {words} from '../../mock/mockData';

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
            <div className="case-file">
              <div className="case-title">
                <p className="word-txt">{w}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Board;