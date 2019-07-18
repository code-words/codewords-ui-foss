import React from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../../variables';
import Score from './Score';
import Board from './Board';
import AgentInput from './AgentInput';

const Main = (props) => {
  return (
    <main className="Main">
      <ActionCableProvider url={API_WS_ROOT} socket={props.socket}>
        <Score team={1} score={5} players={["Lynne", "Justin"]}/>
        <Board pType= {'intel'} />
        <Score team={2} score={6} players={["Rachael", "Jon"]}/>
        <div className="offset"></div>
        <AgentInput/>
        <div className="offset"></div>
      </ActionCableProvider>
    </main>
  );
};

export default Main;