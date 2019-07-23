import React from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../../variables';
import Score from './Score';
import Board from './Board';
import AgentInput from './AgentInput';

const Main = props => {
  const form = !props.isActive ? null 
    : <AgentInput
      websocket={props.websocket}
      hintLogs={props.hintLogs}
      cable={props.cable}
      isActive={props.isActive}
    />
  

  return (
    <main className="Main">
      <ActionCableProvider url={API_WS_ROOT} socket={props.socket}>
        <Score team={1} score={5} players={["Lynne", "Justin"]} />
        <Board 
          playerType={'intel'} 
          cardData={props.cardData} 
          isActive={props.isActive}
        />
        <Score team={2} score={6} players={["Rachael", "Jon"]} />
        <div className="offset"></div>
        {form}
        <div className="offset"></div>
      </ActionCableProvider>
    </main>
  );
};

export default Main;