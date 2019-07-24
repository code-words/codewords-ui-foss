import React, { Fragment } from 'react';
import { ActionCable } from 'react-actioncable-provider';
const shortid = require('shortid');


const Cable = ({ conversations, handleReceivedMessage }) => {
  return (
    <Fragment>
      {conversations.map(conversation => {
        return (
          <ActionCable
          id={conversation.id}
            key={shortid.generate()}  
            channel={{ channel: 'MessagesChannel', conversation: conversation.id }}
            onReceived={handleReceivedMessage}
          />
        );
      })}
    </Fragment>
  );
};

export default Cable;