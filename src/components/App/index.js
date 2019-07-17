import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';
import StartScreen from '../StartScreen';
import RuleList from '../RuleList';
import NewGame from '../NewGame';
import JoinGame from '../JoinGame';
import Lobby from '../Lobby';
import Main from '../Main';
import ConversationsList from '../ConversationsList';

export class App extends Component {
  constructor(){
    super()
    this.state={
      socket: "0000"
    }
  }

  handleWebSocket = ({name,value}) => {
   this.setState({
     socket:value
   })
  }
 
   render(){
     return (
       <div className="App">
         <Header />
         <Route exact path='/startScreen' component={StartScreen} />
         <Route exact path='/ruleList' component={RuleList}/>
         <Route exact path='/newGame' render={() => <NewGame webSockett={this.handleWebSocket}/>}/>
         <Route exact path='/joinGame' component={JoinGame} />
         <Route exact path='/lobby' component={Lobby} />
         <Route path='/' render={() => <Main websocket={this.state.socket}/>}/>
         <ConversationsList />
       </div>
     );

   }
}

export default App;
