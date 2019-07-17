import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../Header';
import StartScreen from '../../StartScreen';
import RuleList from '../RuleList';
import NewGame from '../NewGame';
import JoinGame from '../JoinGame';
import Lobby from '../Lobby';
import Main from '../Main';
import ConversationsList from '../ConversationsList';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path='/startScreen' component={StartScreen} />
      <Route exact path='/ruleList' component={RuleList}/>
      <Route exact path='/newGame' component={NewGame} />
      <Route exact path='/joinGame' component={JoinGame} />
      <Route exact path='/lobby' component={Lobby} />
      <Route path='/' component={Main} />
      <ConversationsList />
    </div>
  );
}

export default App;
