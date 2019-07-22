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
      playerData: {}
    };
  }

  handleUserInit = ({ token }) => {
    this.setState({ token }, () => this.createCable(token));
  };

  updatehintLogs = (data) => {
    let hintLogs = this.state.hintLogs;
    hintLogs.push(data);
    this.setState({ hintLogs });
  };

  dataSwitch = res => {
    switch (res.type) {
      case "player-joined":
        this.setState({ playerData: { id: res.data.id}})
        // this.setPlayer(data);
        console.log("WE'VE HAVE A PLAYER");
        console.log(res.data.id)
        // Add player to lobby, show all players actively in lobby
        // Once lobby is full, redirect to game
        // Set game info [cards, teams, etc]
        break;
      case 'game-setup':
        console.log(res);
        const { cards, players } = res.data;
        const playerData = players.find(p => p.id === this.state.playerData.id);
        const cardData = cards; //build out w/ condition later to fetch intel 

        this.setState({ cardData, playerData });
        break;
      case "player-hint":
        // Did a player give a hint?
        // this.setHint(res);
        // What is the hint and how many cards does it relate to?
        // Render hint to all players
        // Switch active player to Spy of same team
        break;
      case "player-guess":
        // Did a player click on a card?
        // this.setGuess(res);
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

      this.hints = cable.subscriptions.create(
        { channel: 'GameDataChannel' },
        {
          connected: () => console.log("connected"),
          disconnected: () => console.log("disconnected"),
          rejected: () => console.log("rejected"),
          received: res => this.dataSwitch(JSON.parse(res.message)),
          create: hintContent => this.perform("create", {content: "hello"})
        }
      )
    }
  };

  render() {
    console.log(this.state.cardData);
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
          <Route exact path="/game" component={Main} cardData={this.state.cardData}/>
          <Route component={ErrorScreen} />
          <Route path="/" render={() => <Main token={this.state.token} hintLogs={this.state.hintLogs} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
