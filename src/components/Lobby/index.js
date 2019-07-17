import React from 'react';

const Lobby = () => {
  let players = [
    {name: 'justin', team: 'blue'},
    {name: 'LyNne', team: 'red'}
  ];

  const renderJoinedPlayers = (side) => {
    let teamPlayers = players.filter(p => {
      return p.team === side;
    }) 

    console.log('Teams: ', teamPlayers)
    return teamPlayers.map(p => {
      return (<p>{p.name.toUpperCase()}</p>)
    })
  };
  
  return (
    <div className="backdrop">
      <section className="Lobby">
        <h3>Please wait for remaining players...</h3>
        <section className="team-rosters">
          <div className="team-blue">
            <h4>Blue Team</h4>
            <hr />
            {renderJoinedPlayers('blue')}
          </div>
          <div className="team-red">
            <h4>Red Team</h4>
            <hr />
            {renderJoinedPlayers('red')}
          </div>
        </section>
      </section>
    </div>
  )
}

export default Lobby;