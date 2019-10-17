import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Jumbotron from './components/Jumbotron';
import Characters from './components/Characters';
import Wrapper from "./components/Wrapper";
import heroes from "./heroes.json";
import Title from "./components/Title";
import Footer from "./components/Footer"


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    heroes,
    score: 0,
    topScore: 0,
    clicked: [],
    gameOver: false,
    message: "",
    winner: ""
  };

  shuffleArray = array => {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  clickHero = (id) => {
    console.log(`Picture clicked with id: ${id}`);
    if (this.state.clicked.includes(id)) {
      this.resetGame();
    } else {
      this.state.clicked.push(id);
      this.increaseScore();
      console.log(this.state.clicked);
      this.setState({
        gameOver: false,
        message: "Correct!"
      });
      this.shuffleHeroes();
    }
  }
  increaseScore = () => {
    let score = this.state.score + 1
    console.log(`current score  ${score}`);
    if (score === Object.keys(this.state.heroes).length) {
      this.setState({
        heroes,
        topScore: score,
        score: 0,
        clicked: [],
        gameOver: false,
        winner: "You WIN!!!"
      })
    } else if (score > this.state.topScore) {
      this.setState({
        topScore: score,
        score: score,
        message: "New High Score Set"
      })
    } else {
      this.setState({
        score: score
      })
    }
  }
  resetGame = () => {
    this.setState({
      heroes,
      score: 0,
      topScore: this.state.topScore,
      clicked: [],
      gameOver: true,
      message: "Sorry you loss!"
    })
    this.shuffleHeroes();
  }
  shuffleHeroes = () => {
    let newHeroArray = this.shuffleArray(heroes);
    this.setState({ heroes: newHeroArray });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Jumbotron
          winner={this.state.winner} />
        <Wrapper>
          <Title>Click On An Image To Start</Title>
          {this.state.heroes.map(hero => (
            <Characters
              clickHero={this.clickHero}
              id={hero.id}
              key={hero.id}
              name={hero.name}
              image={hero.image}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
