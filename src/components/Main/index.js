import React from 'react';
import Score from '../Score';
import Board from '../Board';
import AgentInput from '../AgentInput';

const Main = () => {
  let status = "Active";
  return (
    <main className="Main">
      <Score team={1} score={5} players={["Lynne", "Justin"]}/>
      <div className="temp-board">
        <Board pType= {'intel'} />
      </div>
      <Score team={2} score={6} players={["Rachael", "Jon"]}/>
      <div className="offset">
      </div>
      <div>
        <AgentInput/>
      </div>
      <div className="offset">
      </div>
    </main>
  );
};

export default Main;