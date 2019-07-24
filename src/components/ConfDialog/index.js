import React from 'react';

const ConfDialog = props => {
  return (
    <div className="overlay">
      <div className="dialog">
        {props.message}
      </div>
    </div>
  );
};

export default ConfDialog;