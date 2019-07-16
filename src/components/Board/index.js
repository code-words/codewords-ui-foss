import React, {Component} from 'react';
// 
import {words} from '../../mock/mockData';
// 

const Board = ({ pType }) => {
  return (
    <section className="gameboard">
      {words.map(w => {
        return (
          <div className="case-file">
            <p className="case-title">
              {w}
            </p>
          </div>
        )
      })}
    </section>
  )
}

export default Board;