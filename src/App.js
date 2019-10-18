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
  // Setting the app state
  state = {
    heroes,
    score: 0,
    topScore: 0,
    clicked: [],
    message: "",
    winner: "Click on an image to earn points, but don't click on any more than once!"
  };
  //shuffle algorith to suffle array
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
  //Method to check if the click matches the id of the image
  clickHero = (id) => {
    this.setState({
      winner: "Click on an image to earn points, but don't click on any more than once!"
    })
    if (this.state.clicked.includes(id)) {
      this.resetGame();
    } else {
      this.state.clicked.push(id);
      this.increaseScore();
      this.setState({
        message: "Correct!"
      });
      this.shuffleHeroes();
    }
  }
  //method to increase the score and top score
  //this method also sets the state based on the score
  increaseScore = () => {
    let score = this.state.score + 1
    if (score === Object.keys(this.state.heroes).length) {
      this.setState({
        heroes,
        topScore: score,
        score: 0,
        clicked: [],
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
  //Method to reset the game
  resetGame = () => {
    this.setState({
      heroes,
      score: 0,
      topScore: this.state.topScore,
      clicked: [],
      message: "Sorry you loss!"
    })
    this.shuffleHeroes();
  }
  //method that calls the shuffle algorith and also assigns the new state for heroes
  shuffleHeroes = () => {
    let newHeroArray = this.shuffleArray(heroes);
    this.setState({ heroes: newHeroArray });
  }

  // Map over this.state.heroes
  // bring componentes together and pass the information using props
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
