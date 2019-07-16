import React from 'react';
import { NavLink } from 'react-router-dom';

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
        <NavLink to="/startScreen" className="nav-item new-game-btn">
          New Game
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;