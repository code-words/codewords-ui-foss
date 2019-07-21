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
      chatLogs: []
    };
  }

  handleUserInit = ({token }) => {
    this.setState(
      {token},
      () => this.createCable(token)
    );
  };

  updateChatLogs = data => {
    let chatLogs = this.state.chatLogs;
    chatLogs.push(data);
    this.setState({ chatLogs });
  };

  dataSwitch = data => {
    let type = data.type;
    switch (type) {
      case "chatLogs":
        this.updateChatLogs(data);
        break;
      case "cardGuess":
        console.log(data)
        break;
      default:
        console.log('deafult case')
        break;
    }
  };
  createCable = token => {
    if (this.state.token === token) {
      let cable = Cable.createConsumer(`ws://localhost:3000/cable/${token}`);
      console.log(cable)
      this.chats = cable.subscriptions.create({
        channel: 'GameDataChannel'
      }, {
        connected: () => {console.log("connected")},
        disconnected: () => { console.log("disconnected")},
        rejected: () => { console.log("rejected")},
        received: (res) => {
          console.log(res)
          switch (res.type) {
            // case 'player':
            //   this.setPlayer(res.player)
            //   break;
            case 'player-joined':
              // Who is the device's player??
              this.setPlayer(res.data)
              // Add player to lobby, show all players actively in lobby
              // Once lobby is full, redirect to game
              // Set game info [cards, teams, etc]
              break;
            case 'game-setup':
              // What is the game res?
              this.setGame(res.data)
              // Set card res in state
                // Make sure the card res is getting to the gameboard
              // Set teams
                // Which teams go first
                // Who is on the intel side?
                  // Fetch Intel Cheatsheet
              break;
              case 'player-hint':
                // Did a player give a hint?
                this.setHint(res.data);
                // What is the hint and how many cards does it relate to?
                  // Render hint to all players
                  // Switch active player to Spy of same team
              break;
            case 'player-guess':
              // Did a player click on a card?
              this.setGuess(res.data);
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
          // let chatLogs = this.state.chatLogs;
          // chatLogs.push(res);
          // this.setState({ chatLogs });
      this.chats = cable.subscriptions.create(
        {
          channel: "GameDataChannel"
        },
        {
          connected: () => {
            console.log("connected");
          },
          disconnected: () => {
            console.log("disconnected");
          },
          rejected: () => {
            console.log("rejected");
          },
          received: data => {
            this.dataSwitch(data);
          },
          create: function(chatContent) {
            this.perform("create", {
              content: "hello"
            });
          }
        }
      );
    }
  })}}

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={StartScreen} />
          <Route exact path="/rules" component={RuleList} />
          <Route exact path="/new"
            render={() => <NewGame handleUserInit={this.handleUserInit} />}
          />
          <Route exact path="/join"
             render={() => <JoinGame handleUserInit={this.handleUserInit} />}
           />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/game" component={Main} />
          <Route component={ErrorScreen} />
          <Route path="/" render={() => <Main token={this.state.token} />} />
          {/* <ConversationsList /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
