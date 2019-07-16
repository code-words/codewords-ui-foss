import React, { Component } from 'react';

class NewGame extends Component {
  constructor() {
    super()
    this.state= {
      name: '',
      numPlayers: 4
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

  }

  render() {
    let { name, numPlayers } = this.state;
    return (
      <section className="StartScreen">
        <form 
          className="NewGame"
          onSubmit={this.handleSubmit}
        >
          <input name="name" value={name} type="text" placeholder="Enter Name" />
          <input name="numPlayers" type="number" value={numPlayers} />
          <input type="submit" value="Create Game"/>
        </form>
      </section>
    )
  }
}

export default NewGame;