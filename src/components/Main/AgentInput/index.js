import React, { Component } from 'react';


class AgentInput extends Component {
  constructor() {
    super()
    this.state = {
      hint: '',
      relWords: 0,
        currentChatMessage: '',
        chatLogs: []
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    name === 'hint'
      ? this.setState({ hint: value })
      : this.setState({ relWords: value })
  }

  handleSendEvent(e) {
    e.preventDefault();
      this.setState({
      currentChatMessage: ''
    });
  }
  renderChatLog() {
    return this.state.chatLogs.map((chat) => {
      return (
        <li key={`chat_${chat.id}`}>
          <span className='chat-message'>{ chat.content }</span>
          <span className='chat-created-at'>{ chat.created_at }</span>
        </li>
      );
    })}
    handleChatInputKeyPress(event) {
      if(event.key === 'Enter') this.handleSendEvent(event);
    }

  updateCurrentChatMessage({target}) {
      this.setState({
        currentChatMessage: target.value
      });
  }
    createSocket() {
      // let cable = Cable.createConsumer(`ws://localhost:3000/cable/${this.props.token}`);
      // this.chats = cable.subscriptions.create({
      //   channel: 'GameDataChannel'
      // }, {
      //   connected: () => {},
      //   received: (data) => {
      //     let chatLogs = this.state.chatLogs;
      //     chatLogs.push(data);
      //     this.setState({ chatLogs });
      //   },
      //   create: function(chatContent) {
      //     this.perform('create', {
      //       content: chatContent
      //     });
      //   }
      // });
    }
  componentWillMount() {
    this.createSocket();
  }

  render() {
    return (
      <form className="AgentInput">
        {/* <input name="hint" type="text" value={this.state.hint} onChange={this.handleChange} /> */}
        <input className="num-input" name="relWords" type="number" value={this.state.relWords} onChange={this.handleChange} />
        {/* <input type="submit" onClick={this.handleSubmit} /> */}
        <h1>Chat</h1>
            <ul className='chat-logs'>
              { this.renderChatLog() }
            </ul>
            <input
              onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
              value={ this.state.currentChatMessage }
              onChange={ (e) => this.updateCurrentChatMessage(e) }
              type='text'
              placeholder='Enter your message...'
              className='chat-input' />
            <button
              onClick={ (e) => this.handleSendEvent(e) }
              className='send'>
              Send
            </button>
      
      </form>
    )
  }
}

export default AgentInput;