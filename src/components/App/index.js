import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "../Header";
import StartScreen from "../StartScreen";
import RuleList from "../RuleList";
import NewGame from "../NewGame";
import JoinGame from "../JoinGame";
import Lobby from "../Lobby";
import Main from "../Main";
import ErrorScreen from "../ErrorScreen";
import Cable from "actioncable";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      token: "000",
      hintLogs: [],
      cardData: [],
      cable: {}
    };
  }

  handleUserInit = (result) => {
    const { id, name, token } = result;
    localStorage.setItem("Token", token);
    const user = { id, name, token }
    if (result.invite_code)
      this.setState({ invite_code: result.invite_code });

    this.setState({ token, user }, () => this.createCable(token));
  };

  updateHintLogs = (data) => {
    let hintLogs = this.state.hintLogs;
    hintLogs.push(data);
    this.setState({ hintLogs });
  };

  setPlayer = (data) => {
    const { playerRoster } = data;
    console.log('The Deets',data);
    this.setState({ playerRoster })
  };

  dataSwitch = (result) => {
    const { type, data } = result;

    switch (type) {
      case "player-joined":
        console.log("WE HAVE A PLAYER");
        this.setPlayer(data);
        // Set game info [cards, teams, etc]
        break;
      case "game-setup":
        // What is the game res?
        console.log("WE HAVE A GAME");
        console.log(data);
        //** this.setGame(data);
        // Set card res in state
        // Make sure the card res is getting to the gameboard
        // Set teams
        // Which teams go first
        // Who is on the intel side?
        // Fetch Intel Cheatsheet
        break;
      case "player-hint":
        // Did a player give a hint?
        // this.setHint(data);
        // What is the hint and how many cards does it relate to?
        // Render hint to all players
        // Switch active player to Spy of same team
        //This is also where we should callupdateHintLog()
        break;
      case "player-guess":
        // Did a player click on a card?
        this.setGuess(data);
        // Flip card
        // if this.state.words === guess
        // Process correct guess
        // Assign points to correct team
        // Decrement remaining guesses
        // See if they are out of guesses
        // If not, next team's turn
        // If yes, next guess
        break;
      default:
        console.log("ERROR in Switch");
    }
  };

  createCable = token => {
    if (this.state.token === token) {
      let cable = Cable.createConsumer(`ws://localhost:3000/cable/${token}`);
      this.hints = cable.subscriptions.create({
        channel: 'GameDataChannel'
      }, {
          connected: () => { console.log("connected") },
          disconnected: () => { console.log("disconnected") },
          rejected: () => { console.log("rejected") },
          hint:(data) => {
            return this.perform("hint", data);
          },
          received: (res) => {
            const result = JSON.parse(res.message);
            this.dataSwitch(result);
          }
        })
        this.setState({cable: this.hints})
        

      }
  };

  render() {
    console.log('APP State: ', this.state);
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/rules" component={RuleList} />
          <Route
            exact
            path="/new"
            render={() => <NewGame handleUserInit={this.handleUserInit} />}
          />
          <Route
            exact
            path="/join"
            render={() => <JoinGame handleUserInit={this.handleUserInit} />}
          />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/game" component={Main} />
          <Route component={ErrorScreen} />
          <Route path="/" render={() => <Main cable = {this.state.cable} token={this.state.token} hintLogs={this.state.hintLogs} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
