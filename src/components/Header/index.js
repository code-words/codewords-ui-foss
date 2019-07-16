import React from 'react';

const Header = () => {
  let status = "Active";
// todo: FIX style
  // let style = {
  //   background: `$player-${status.toLowerCase()}`
  // }

  return (
    <header className="Header">
      <div className="header-left">
        <h1 className="header-title">CodeWords</h1>
      </div>
      <h2 className="status">Agent Status:
        <span className={status}> {status}</span>
      </h2>
      <nav className="header-right">
        <p>Instructions</p>
        <button className="nav-item new-game-btn">New Game</button>
      </nav>
    </header>
  );
};

export default Header;