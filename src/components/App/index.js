import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import StartScreen from '../StartScreen';
import RuleList from '../RuleList';
import NewGame from '../NewGame';
import JoinGame from '../JoinGame';
import Lobby from '../Lobby';
import Main from '../Main';
import ErrorScreen from '../ErrorScreen';

function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={StartScreen} />
        <Route exact path='/rules' component={RuleList}/>
        <Route exact path='/new' component={NewGame} />
        <Route exact path='/join' component={JoinGame} />
        <Route exact path='/lobby' component={Lobby} />
        <Route exact path='/game' component={Main} />
        <Route component={ErrorScreen} />
      </Switch>
    </div>
  );
}

export default App;
