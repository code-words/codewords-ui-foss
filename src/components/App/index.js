import React from 'react';
// import './_App.scss';
import Header from '../Header';
import Main from '../Main';
import ConversationsList from '../ConversationsList';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <ConversationsList />

    </div>
  );
}

export default App;
