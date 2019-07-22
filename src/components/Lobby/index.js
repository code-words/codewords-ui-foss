import React from 'react';
import { Redirect } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";

const Lobby = ({ players, inviteCode, isLobbyFull }) => {
  const renderJoinedPlayers = () => {
    let agents = [];

    for (let i = 0; i <= 3; i++) {
      if (players[i]) {
        agents.push(players[i].name)
      } else {
        agents.push(null);
      }
    }

    return agents.map(a => isAgent(a));
  };

  const isAgent = (agent) => {
    if (agent !== null) {
      return (
        <div className="agent">
          <p>{agent.toUpperCase()}</p>
        </div>
      )
    } else {
      return (
        <div className="agent missing">
          <p>{loadingDots()}</p>
        </div>
      )
    }
  }

  const loadingDots = () => {
    let dots = [];

    for (let i = 1; i < 6; i++ ) {
      dots.push(`dot${i}`);
    }

    return dots.map(d => <span id={d}>-</span> )
  }

  const renderCode = () => {
    return (
      <p>
        Invite Code:
        <CopyToClipboard text={inviteCode}>
          <code>
            {inviteCode}
            <i className="far fa-copy" />
          </code>
        </CopyToClipboard>
      </p>
    );
  }

  if (isLobbyFull) {
    return ( <Redirect to="/game" /> )
  }
  
  return (
    <div className="backdrop">
      <section className="Lobby">
        <div className="Lobby-head">
          <h2>LOBBY</h2>
          <span className="fade"></span>
        </div>
        <div className="Lobby-sub">
          <h3> 
            Please wait for {players.length} out of players 4
          </h3>
          {inviteCode && renderCode()}
        </div>
        <section className="roster">
          <h4>Current Agents:</h4>
          {renderJoinedPlayers()}
        </section>
      </section>
    </div>
  )
}

export default Lobby;