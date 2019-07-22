import React, {Component} from 'react';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from '../../variables';
import Score from './Score';
import Board from './Board';
import AgentInput from './AgentInput';

class Main extends Component {
  render() {
  console.log(this.props.cardData)
    return (
      <main className="Main">
      <ActionCableProvider url={API_WS_ROOT} socket={this.props.socket}>
        <Score team={1} score={5} players={["Lynne", "Justin"]}/>
        <Board playerType={'intel'} cardData={props.cardData}/>
        <Score team={2} score={6} players={["Rachael", "Jon"]}/>
        <div className="offset"></div>
        <AgentInput cable = {this.props.cable} websocket={props.websocket} hintLogs ={props.hintLogs}/>
        <div className="offset"></div>
        </ActionCableProvider>
      </main>
    );
  }
}

export default Main
