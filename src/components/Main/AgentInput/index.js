import React, { Component } from 'react';

class AgentInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hintWord: '',
      numCards: 1,
      hintLogs: []
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    this.setState({ [name]:value });

    // name === 'hint'
    //   ? this.setState({ hint: value })
    //   : this.setState({ relWords: value })
  }

  handleSendEvent(e) {
    e.preventDefault();
    const { hintWord, numCards } = this.state;
    let hint = { hintWord, numCards };

    this.props.cable.sendHint(hint);

    this.setState({ hintWord: '',  });
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

  // updateCurrentChatMessage({target}) {
  //     this.setState({
  //       hint: target.value
  //     });
  // }

  componentDidMount = () => {
    let hintLogs = this.props.hintLogs;
    this.setState({hintLogs})
  }

  render() {
    console.log('Agent State', this.state)
    return (
      <form 
        className="AgentInput" 
        onSubmit={(e) => this.handleSendEvent(e)}
      >
        <h1>Chat</h1>
        <ul className='chat-logs'>
          { this.renderChatLog() }
        </ul>
        <input
          className="num-input"
          name="numCards"
          type="number"
          value={this.state.numCards}
          onChange={this.handleChange}
          disabled={!this.props.isActive}
        />
        <input
          name="hintWord"
          onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
          value={ this.state.hint }
          onChange={ (e) => this.handleChange(e) }
          type='text'
          placeholder='Enter your hint...'
          className='chat-input'
          disabled={!this.props.isActive}
        />
        <button
          onClick={ (e) => this.handleSendEvent(e) }
          className='send'
          disabled={!this.props.isActive}
        >
          Send
        </button>
      
      </form>
    )
  }
}

export default AgentInput;