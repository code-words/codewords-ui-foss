import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import StartScreen from '../StartScreen';
import RuleList from '../RuleList';
import NewGame from '../NewGame';
import JoinGame from '../JoinGame';
import Lobby from '../Lobby';
import Main from '../Main';
import ErrorScreen from '../ErrorScreen';
import Cable from 'actioncable';
import ConfDialog from '../ConfDialog';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			user: {},
			invite_code: '',
      playerRoster: [],
      hintLogs: [],
      cardData: [],
      cable: {},
      isLobbyFull: false,
      currentPlayerId: null,
      remainingAttempts: null,
      currentHint: {
        hintWord: '', 
        relatedCards: null
      },
      showDialog: false,
      confMsg: ''
    };
  }

  handleUserInit = result => {
    const { id, name, token } = result;
    localStorage.setItem("Token", token);
    const user = { id, name, token }
    if (result.invite_code) this.setState({ invite_code: result.invite_code });
    this.setState({ user }, () => this.createCable(token));
  };

  updateHintLogs = data => {
    let hintLogs = this.state.hintLogs;
    hintLogs.push(data);
    this.setState({ hintLogs });
  };

  setPlayer = data => {
    const { playerRoster } = data;
    this.setState({ playerRoster }, () => {
      if (this.state.playerRoster.length === 4) {
        this.setState({ isLobbyFull: true })
      }
    })
  };

  setGame = async data => {
    console.log('game data: ', data)
    const { cards, players, firstPlayerId } = data;
		const user = players.find(p => p.id === this.state.user.id);
		let cardData = cards;

		if (user.isIntel) {
			const res = await fetch(`http://localhost:3000/api/v1/intel?token=${this.state.user.token}`);
			cardData = await res.json();
			cardData = cardData.cards;
    }

    this.setState({
      playerRoster: players,
      currentPlayerId: firstPlayerId,
			cardData,
			user: { ...this.state.user, ...user }
    });
  };
  
  setHint = data => {
    const { hintWord, relatedCards, currentPlayerId } = data;
    const player = this.state.playerRoster
      .find(p => p.id === this.state.currentPlayerId);

    this.setState({
      currentPlayerId,
      hint: { hintWord, relatedCards },
    }, () => this.showConf(`${player.name} gave a hint: ${hintWord} (x${relatedCards})`));
  }

	dataSwitch = result => {
    const { type, data } = result;
    console.log(type,':' ,data)

		switch (type) {
			case 'player-joined':
				this.setPlayer(data);
				break;
			case 'game-setup':
				this.setGame(data);
				break;
      case 'hint-provided':
        console.log('HINT GIVEN')
        this.setHint(data)
				break;
      case 'board-update':
        const player = this.state.playerRoster
          .find(p => p.id === this.state.currentPlayerId);
				const { card, currentPlayerId, remainingAttempts } = data;
				let cardData = [ ...this.state.cardData ];
        const cardIdx = cardData.findIndex(i => i.id === card.id);

        cardData[cardIdx] = { ...cardData[cardIdx], ...card };
        
        this.setState({ cardData, currentPlayerId, remainingAttempts }, () => this.showConf(`${player.name} guessed ${cardData[cardIdx].word}!`));
        
        break;
      case 'game-over':
        this.showConf(`End of Game!  ${data.winningTeam.toUpperCase()} team wins!`)
        break;
      case 'illegal-action':
        this.showConf(data.error);
        break;
			default:
				console.log('ERROR in Switch');
		}
  };
  
  showConf = msg => {
    this.setState({ showDialog: true, confMsg: msg });
    setTimeout(() => this.setState({ showDialog: false }), 2000);
  }

	createCable = token => {
		if (this.state.user.token === token) {
			let connection = Cable.createConsumer(`ws://localhost:3000/cable/${token}`);

			this.cable = connection.subscriptions.create(
				{ channel: 'GameDataChannel' },
				{
					connected: () => console.log('connected'),
					disconnected: () => console.log('disconnected'),
					rejected: () => console.log('rejected'),
					received: res => this.dataSwitch(JSON.parse(res.message)),
					sendHint: hint => {
            console.log('Hint MF', hint)
            this.cable.perform('send_hint', hint)
          },
					sendGuess: guess => {
						console.log('HIT CABLE METHOD GUESS', guess);
						this.cable.perform('send_guess', guess);
					}
				}
			);
			this.setState({ cable: this.cable });
		}
	};

	render() {
    console.log('state: ', this.state);

    const dialog = this.state.showDialog ? <ConfDialog message={this.state.confMsg} /> : null;
      
		return (
      <div className="App">
        {dialog}
				<Header />
				<Switch>
					<Route exact path="/" component={StartScreen} />
					<Route exact path="/rules" component={RuleList} />
					<Route exact path="/new" render={
            /* istanbul ignore next */
            () => <NewGame handleUserInit={this.handleUserInit} />} />
					<Route exact path="/join" render={
            /* istanbul ignore next */
            () => <JoinGame handleUserInit={this.handleUserInit} />} />
					<Route
						exact
						path="/lobby"
						render={
              /* istanbul ignore next */
              () => (
							<Lobby
								players={this.state.playerRoster}
								inviteCode={this.state.invite_code}
								isLobbyFull={this.state.isLobbyFull}
							/>
						)}
					/>
					<Route
						exact
						path="/game"
						component={() => (
							<Main
								token={this.state.user.token}
								hintLogs={this.state.hintLogs}
                cardData={this.state.cardData}
                isIntel={this.state.user.isIntel}
								isActive={this.state.user.id === this.state.currentPlayerId}
								cable={this.state.cable}
								players={this.state.playerRoster}
								sendGuess={this.cable.sendGuess}
							/>
						)}
					/>
					<Route component={ErrorScreen} />
				</Switch>
			</div>
		);
	}
}

export default App;
