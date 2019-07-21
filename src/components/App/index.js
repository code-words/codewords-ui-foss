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
      cardData: []
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
    let data = res.data;
    switch (data) {
      // case 'player':
      //   this.setPlayer(res.player)
      //   break;
      case "player-joined":
        // Who is the device's player??
        this.setPlayer(data);
        // Add player to lobby, show all players actively in lobby
        // Once lobby is full, redirect to game
        // Set game info [cards, teams, etc]
        break;
      case "game-setup":
        // What is the game res?
        this.setGame(data);
        // Set card res in state
        // Make sure the card res is getting to the gameboard
        // Set teams
        // Which teams go first
        // Who is on the intel side?
        // Fetch Intel Cheatsheet
        break;
      case "player-hint":
        // Did a player give a hint?
        this.setHint(data);
        // What is the hint and how many cards does it relate to?
        // Render hint to all players
        // Switch active player to Spy of same team
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
      console.log(cable)
      this.hints = cable.subscriptions.create({
        channel: 'GameDataChannel'
      }, {
        // we get connected log when players join, but no received log
        connected: () => {console.log("connected")},
        disconnected: () => { console.log("disconnected")},
        rejected: () => { console.log("rejected")},
        received: (res) => {
          const result = JSON.parse(res.message);
          switch (result.type) {
            // case 'player':
            //   this.setPlayer(res.player)
            //   break;
            case 'player-joined':
              // Who is the device's player??
              console.log("WE'VE HAVE A PLAYER");
              // this.setPlayer(result.data)
              // Add player to lobby, show all players actively in lobby
              // Once lobby is full, redirect to game
              // Set game info [cards, teams, etc]
              break;
            case 'game-setup':
              console.log("WE'VE HAVE A GAME");
              console.log(result);
              // What is the game res?
              // this.setGame(result.data)
              // Set card res in state
                // Make sure the card res is getting to the gameboard
              // Set teams
                // Which teams go first
                // Who is on the intel side?
                  // Fetch Intel Cheatsheet
              break;
              case 'player-hint':
                // Did a player give a hint?
                this.setHint(result.data);
                // What is the hint and how many cards does it relate to?
                  // Render hint to all players
                  // Switch active player to Spy of same team
              let hintLogs = this.state.hintLogs;
              hintLogs.push(result);
              this.setState({ hintLogs });
              break;
            case 'player-guess':
              // Did a player click on a card?
              this.setGuess(result.data);
              // Flip card
                // if this.state.words === guess
                  // Process correct guess
                  // Assign points to correct team
                  // Decrement remaining guesses
                    // See if they are out of guesses
                    // If not, next team's turn
                    // If yes, next guess
              break;
            default: console.log('ERROR in Switch');
          }

      // this.hints = cable.subscriptions.create(
      //   {
      //     channel: "GameDataChannel"
      //   },
      //   {
      //     connected: () => {
      //       console.log("connected");
      //     },
      //     disconnected: () => {
      //       console.log("disconnected");
      //     },
      //     rejected: () => {
      //       console.log("rejected");
      //     },
      //     received: data => {
      //       this.dataSwitch(data);
      //     },
      //     create: function(hintContent) {
      //       this.perform("create", {
      //         content: "hello"
      //       });
      //     }
      //   }
      // );
    }
  };

  render() {
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
          <Route path="/" render={() => <Main token={this.state.token} hintLogs={this.state.hintLogs} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
