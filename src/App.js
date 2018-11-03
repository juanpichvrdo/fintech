import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    randomColor: "",
    prime: 1,
    name: "Juan Daniel"
  };

  randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
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

  render() {
    const { randomColor, prime, name } = this.state;
    return (
      <div className="App" style={{ background: randomColor }}>
        <h1 className="page__title">{name}</h1>
        <p className="page__subtitle">jpichardopena@gmail.com</p>
        <div className="page__buttons">
          <button onClick={this.randomColor}>Boton 1</button>
          <button onClick={this.primeNumber.bind(this, prime)}>{prime}</button>
          <button onClick={this.changeLetter.bind(this, name)}>Boton 3</button>
          <button onClick={this.changePage}>Boton 4</button>
        </div>
      </div>
    );
  }
}

export default App;
