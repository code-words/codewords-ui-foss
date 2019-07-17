import React, {Component} from 'react';
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


export class App extends Component {
  constructor(){
    super()
    this.state={
      token: "000"
    }
  }

  handleUserInit = ({name,token}) => {
    console.log(token)
   this.setState({
     token
   }, () => this.createCable(token) )
   
  }
  createCable = (token) => {
    if(this.state.token === token ){
      let cable = Cable.createConsumer(`ws://localhost:3000/cable/${token}`);
      console.log(cable)
      this.chats = cable.subscriptions.create({
        channel: 'GameDataChannel'
      }, {
        connected: () => {console.log("connected")},
        disconnected: () => { console.log("disconnected")},
        rejected: () => { console.log("rejected")},
        received: (data) => {
          console.log(data)
          // let chatLogs = this.state.chatLogs;
          // chatLogs.push(data);
          // this.setState({ chatLogs });
        },
        create: function(chatContent) {
          this.perform('create', {
            content: "hello"
          });
        }
      });
    }
  }
 
   render(){
     return (
       <div className="App">
         <Header />
           <Switch>
             <Route exact path='/' component={StartScreen} />
             <Route exact path='/rules' component={RuleList}/>
             <Route exact path='/new' render={()=> <NewGame handleUserInit={this.handleUserInit}/>} />
             <Route exact path='/join' component={JoinGame} />
             <Route exact path='/lobby' component={Lobby} />
             <Route exact path='/game' component={Main} />
             <Route component={ErrorScreen} />
             <Route path='/' render={() => <Main token={this.state.token}/>}/>
             {/* <ConversationsList /> */}
         </Switch>
       </div>
     );

   }
}

export default App;
