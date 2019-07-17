import React from 'react';
import { NavLink } from 'react-router-dom';

const StartScreen = () => {
  return (
    <div className="backdrop">
      <section className="StartScreen">
        <article>
          <h2>Welcome to CodeWords</h2>
          <h4>We've got a mission for you agents!</h4>
          <p>Get your friends together to put your wits to the test. Play team vs team to see if you have what it takes to be the best damn operatives we've got. Give your partner one word hints to find the most case files.</p> 
        </article>
        <nav>
          <NavLink to="/new">START NEW GAME</NavLink>
          <NavLink to="/join">JOIN GAME</NavLink>
          <NavLink to="/rules">VIEW RULE LIST</NavLink>
        </nav>
      </section>
    </div>
  )
}

export default StartScreen;