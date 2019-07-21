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
          <Route exact path="/join" component={JoinGame} />
          <Route exact path="/lobby" component={Lobby} />
          <Route exact path="/game" component={Main} />
          <Route component={ErrorScreen} />
          <Route path="/" render={() => <Main token={this.state.token} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
