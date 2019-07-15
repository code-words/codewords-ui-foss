import React from 'react';

const Header = () => {
  return (
    <header className="Header">
      <div className="header-left">
        <h1 className="header-title">CodeWords</h1>
      </div>
      <nav className="header-right">
        <p>Instructions</p>
        <button className="nav-item new-game-btn">New Game</button>
      </nav>
    </header>
  );
};

export default Header;