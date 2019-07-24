import React from 'react';

const AgentHUD = ({isActive, hint}) => {
  const renderMessage = () => {
    let dots = ['.','.','.'];
    const appendDots = dots
      .map((d, ind) => <span id={`dot${ind+1}`} key={ind}>{d}</span>);

    if (hint.hintWord) {
      return (
        <div className="activeHint">
          <h3>
            The Hint is (<strong>{hint.hintWord.toUpperCase()}</strong>) 
            Related to (<strong>{hint.relatedCards}</strong>) cards
          </h3>
          {isActive && <p>Click a card above</p>}
        </div>
      )
    } else {
      return (<h3>Waiting for hint{appendDots}</h3>)
    }
  }
  
  return (
    <article className={`AgentInput active-${isActive}`}>
      {renderMessage()}
    </article>
  )
}

export default AgentHUD;