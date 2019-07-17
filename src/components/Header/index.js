import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header className="Header">
      <div className="header-left">
        <h1 className="header-title">CodeWords</h1>
      </div>
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