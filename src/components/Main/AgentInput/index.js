import React, { Component } from 'react';

class AgentInput extends Component {
  constructor() {
    super()
    this.state = {
      hint: '',
      relWords: 0,
        hintLogs: []
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;
    name === 'hint'
      ? this.setState({ hint: value })
      : this.setState({ relWords: value })
  }

  handleSendEvent(e) {
    console.log("sending")
    e.preventDefault();
    this.props.cable.hint({ message: this.state.hint });
      this.setState({
      hint: ''
    });
  }

  renderChatLog() {
    // return this.state.hintLogs.map((chat) => {
    //   return (
    //     <li key={`chat_${chat.id}`}>
    //       <span className='chat-message'>{ chat.content }</span>
    //       <span className='chat-created-at'>{ chat.created_at }</span>
    //     </li>
    //   );
    // })
  }
    handleChatInputKeyPress(event) {
      if(event.key === 'Enter') this.handleSendEvent(event);
    }

  updateCurrentChatMessage({target}) {
      this.setState({
        hint: target.value
      });
  }

  componentDidMount = () => {
    let hintLogs = this.props.hintLogs;
    this.setState({hintLogs})
  }

  render() {
    return (
      <form className="AgentInput">
        <input
          className="num-input"
          name="relWords"
          type="number"
          value={this.state.relWords}
          onChange={this.handleChange}
          disabled={!props.isActive}
        />
        <h1>Chat</h1>
        <ul className='chat-logs'>
          { this.renderChatLog() }
        </ul>
        <input
          onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
          value={ this.state.hint }
          onChange={ (e) => this.updateCurrentChatMessage(e) }
          type='text'
          placeholder='Enter your message...'
          className='chat-input'
          disabled={!props.isActive}
        />
        <button
          onClick={ (e) => this.handleSendEvent(e) }
          className='send'
          disabled={!props.isActive}
        >
          Send
        </button>
      
      </form>
    )
  }
}

export default AgentInput;