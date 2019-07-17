import React, { Component } from 'react';

class JoinGame extends Component {
  constructor() {
    super()
    this.state= {
      inviteCode: '',
      name: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleChange = (e) => {
    const { name, value } = e.target; 

    this.setState({ name, value })
  }

  render() {
    return (
      <section className="StartScreen">
        <form 
          className="JoinGame"
          onSubmit={this.handleSubmit} 
        >
          <input 
            name="inviteCode" 
            value={ this.state.inviteCode } 
            type="text" 
            placeholder="Enter Invite Code" 
            onChange={ this.handleChange }
          />
          <input 
            name="name" 
            type="text" 
            placeholder="Enter Name" 
            onChange={ this.handleChange }  
          />
          <input 
            type="submit" 
            value="Submit" 
            disabled={this.state.inviteCode && this.state.name}
          />
        </form>
      </section>
    )
  }
}

export default JoinGame;