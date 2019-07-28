import React from 'react';
import { Link } from 'react-router-dom'

const ConfDialog = props => {
  const buttons = !props.over ? null
    : <div className="replay-btns">
        <Link to="/" className="nav-item btn-default start-new-btn">
          Start New Game
        </Link>
        <Link to="/" className="nav-item btn-default replay-btn">
          Play Again!
        </Link>
      </div>

  return (
    <div className="overlay">
      <div className="dialog">
        {props.message}
        {buttons}
      </div>
    </div>
  );
};

export default ConfDialog;