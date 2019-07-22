import React from 'react';
import { Link } from 'react-router-dom';

const Lobby = () => {
  let players = [
    {name: 'justin', team: 'blue'},
    {name: 'LyNne', team: 'red'}
  ];

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
          
        </div>
        <section className="roster">
          <h4>Current Agents:</h4>
          {renderJoinedPlayers()}
        </section>
        <Link to='/game'>Go to Game</Link>
      </section>
    </div>
  )
}

export default Lobby;