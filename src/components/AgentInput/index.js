import React, {Component} from 'react';

class AgentInput extends Component {
  constructor() {
    super()
    this.state = {
      hint: '',
      relWords: 0
    }
  }

  handleChange = (e) => {
    const {name, value} = e.target;

    name === 'hint'
      ? this.setState({ hint: value })
      : this.setState({ relWords: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <form>
        <input name="hint" type="text" value={this.state.hint} onChange={this.handleChange} />
        <input name="relWords" type="number" value={this.state.relWords} onChange={this.handleChange} />
        <input type="submit" onClick={this.handleSubmit} />
      </form>
    )
  }
}

export default AgentInput;