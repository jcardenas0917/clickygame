import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import Characters from './components/Characters';
import Wrapper from "./components/Wrapper";
import heroes from "./heroes.json";
import Title from "./components/Title";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes,
    score: 0,
    topScore: 0,
    clicked: [],
    gameOver: false
  };
  clickHero = () => {

  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron />
        <Wrapper>
          <Title>AVENGERS</Title>
          {this.state.heroes.map(hero => (
            <Characters
              id={hero.id}
              key={hero.id}
              image={hero.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
