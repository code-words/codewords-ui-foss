import React from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../../variables';
import Score from './Score';
import Board from './Board';
import AgentInput from './AgentInput';
import AgentHUD from './AgentHUD';

const Main = props => {
  const form = props.isActive //&& props.isIntel
    ? ( <AgentInput 
          websocket={props.websocket} 
          hintLogs={props.hintLogs} 
          cable={props.cable} 
          isActive={props.isActive} />
      )
    : ( <AgentHUD 
          isActive={props.isActive}
          hint={props.hint} />
      );

	const players = {
		blueIntel: props.players.find(p => p.isIntel && p.isBlueTeam),
		blueGuesser: props.players.find(p => !p.isIntel && p.isBlueTeam),
		redIntel: props.players.find(p => p.isIntel && !p.isBlueTeam),
		redGuesser: props.players.find(p => !p.isIntel && !p.isBlueTeam)
	};

	const scores = {
		blue: 0,
		red: 0
	};

	return (
		<main className="Main">
			<ActionCableProvider url={API_WS_ROOT} socket={props.socket}>
				<Score team={'blue'} score={scores.blue} players={[ players.blueIntel.name, players.blueGuesser.name ]} />
        <Board playerType={'intel'} isActive={props.isActive} cardData={props.cardData} sendGuess={props.sendGuess} />
				<Score team={'red'} score={scores.red} players={[ players.redIntel.name, players.redGuesser.name ]} />
				<div className="offset" />
				{form}
				<div className="offset" />
			</ActionCableProvider>
		</main>
	);
};

export default Main;
