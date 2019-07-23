import React from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../../variables';
import Score from './Score';
import Board from './Board';
import AgentInput from './AgentInput';

const Main = props => {
  const form = !props.cardData.type ? null 
    : <AgentInput
      websocket={props.websocket}
      hintLogs={props.hintLogs}
      cable={props.cable}
      isActive={props.isActive}
    />
  

  return (
    <main className="Main">
      <ActionCableProvider url={API_WS_ROOT} socket={props.socket}>
        <Score team={1} score={5} players={[props.playerRoster[0].name, props.playerRoster[2].name]} />
        <Board playerType={'intel'} cardData={props.cardData} sendGuess={props.sendGuess} />
        <Score team={2} score={6} players={[props.playerRoster[1].name, props.playerRoster[3].name]} />
        <div className="offset"></div>
        {form}
        <div className="offset"></div>
      </ActionCableProvider>
    </main>
  );
};

export default Main;