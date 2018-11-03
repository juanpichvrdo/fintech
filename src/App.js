import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    randomColor: "",
    prime: 1,
    name: "Juan Daniel",
    dogPicture: ""
  };

  componentDidMount = () => {
    const randomColorStorage = sessionStorage.getItem("randomColor");
    const randomColor = JSON.parse(randomColorStorage);

    this.setState({ randomColor });
  };

  randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;

    const randomColorStorage = JSON.stringify(randomColor);
    sessionStorage.setItem("randomColor", randomColorStorage);

    this.setState({ randomColor });
  };

  isPrime = num => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num !== 1 && num !== 0;
  };

  primeNumber = num => {
    num++;
    if (this.isPrime(num)) {
      return this.setState({ prime: num });
    } else {
      this.primeNumber(num);
    }
  };

  changeLetter = name => {
    setTimeout(() => {
      const nameArr = name.split("");
      const firstLetter = nameArr.shift();
      nameArr.push(firstLetter);

      this.setState({ name: nameArr.join("") });
    }, 500);
  };

  changePage = () => {
    this.props.history.push("/introduccion");
  };

  getDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const dog = await response.json();
      const dogPicture = dog.message;
      this.setState({ dogPicture });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { randomColor, prime, name, dogPicture } = this.state;

    return (
      <div className="App" style={{ background: randomColor }}>
        <h1 className="page__title">{name}</h1>
        <p className="page__subtitle">jpichardopena@gmail.com</p>
        <div className="page__buttons">
          <button onClick={this.randomColor}>Botón 1</button>
          <button onClick={this.primeNumber.bind(this, prime)}>{prime}</button>
          <button onClick={this.changeLetter.bind(this, name)}>Botón 3</button>
          <button onClick={this.changePage}>Botón 4</button>
          <button className="button5" onClick={this.getDog}>
            Botón 5
          </button>

          {dogPicture && (
            <div className="dog__container">
              <img className="dog__picture" src={dogPicture} alt="Dog" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
