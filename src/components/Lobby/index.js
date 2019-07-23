import React from 'react';
import { Redirect } from 'react-router-dom';
import { CopyToClipboard } from "react-copy-to-clipboard";

const Lobby = ({ players, inviteCode, isLobbyFull }) => {
  const renderJoinedPlayers = () => {
    let agents = [];
    let availKeys = [];

    for (let i = 0; i <= 3; i++) {
      if (players[i]) {
        agents.push(players[i].name)
      } else {
        agents.push(null);
        availKeys.push(i)
      }
    }

    return agents.map((a, index) => isAgent(a, index));
  };

  const isAgent = (agent, index) => {
    if (agent !== null) {
      return (
        <div className="agent" key={`agent${agent.id}`}>
          <p key={`p${agent.id}`}>{agent.toUpperCase()}</p>
        </div>
      )
    } else {
      return (
        <div className="agent missing" key={`dot${index}`}>
          <p key={`pDot${index}`}>{loadingDots()}</p>
        </div>
      )
    }
  }

  const loadingDots = () => {
    let dots = [];

    for (let i = 1; i < 6; i++ ) {
      dots.push(`dot${i}`);
    }

    return dots.map((d, ind) => 
      <span key={ind} id={d}>-</span>
    )
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
            Waiting for {4 - players.length} more players
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