import React from 'react';
import Score from './Score';
import Board from './Board';
import AgentInput from '../AgentInput';

const Main = () => {
  return (
    <main className="Main">
      <Score team={1} score={5} players={["Lynne", "Justin"]}/>
      <Board pType= {'intel'} />
      <Score team={2} score={6} players={["Rachael", "Jon"]}/>
      <div className="offset"></div>
      <AgentInput/>
      <div className="offset"></div>
    </main>
  );
};

export default Main;