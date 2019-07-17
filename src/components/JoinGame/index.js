import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    console.log('do the thing: joingame')
  }

  handleChange = (e) => {
    const { name, value } = e.target; 

    this.setState({ [name]: value })
  }

  render() {
    console.log('JOIN GAME (state): ', this.state)

    return (
      <div className="backdrop">
        <section className="StartScreen">
          <form 
            className="JoinGame"
            onSubmit={this.handleSubmit} 
          >
            <h2>Friends started a game?</h2>
            <div>
              <label for="inviteCode">Please enter invite code</label>
              <input 
                name="inviteCode" 
                value={ this.state.inviteCode } 
                type="text" 
                placeholder="Enter Invite Code" 
                onChange={ this.handleChange }
              />
            </div>
            <div>
              <label for="inviteCode">Choose your agent name</label>
              <input 
                name="name" 
                type="text" 
                placeholder="Enter Name" 
                onChange={ this.handleChange }  
              />
            </div>
            <Link className="btn-default start-btn" to='/game'>
              <input 
                type="submit" 
                value="SUBMIT" 
                disabled={!this.state.inviteCode || !this.state.name}
              />
            </Link>
          </form>
        </section>
      </div>
    )
  }
}

export default JoinGame;