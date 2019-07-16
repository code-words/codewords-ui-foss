import React from 'react';
import Score from '../Score';

const Main = () => {
  return (
    <main className="Main">
      <Score team={1} score={5} players={["Lynne", "Justin"]}/>
      <div className="temp-board">
        Test
      </div>
      <Score team={2} score={6} players={["Rachael", "Jon"]}/>
      <div className="offset">
      </div>
      <div>
        <p>User form/options go here!</p>
      </div>
      <div className="offset">
      </div>
    </main>
  );
};

export default Main;