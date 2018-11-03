import React, { Component } from "react";
import "./App.scss";

class App extends Component {
  state = {
    randomColor: "",
    prime: 1
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

  render() {
    const { randomColor, prime } = this.state;
    console.log(prime);
    return (
      <div className="App" style={{ background: randomColor }}>
        <h1 className="page__title">Juan Daniel</h1>
        <p className="page__subtitle">jpichardopena@gmail.com</p>
        <div className="page__buttons">
          <button onClick={this.randomColor}>Cambiar color de pagina</button>
          <button onClick={this.primeNumber.bind(this, prime)}>{prime}</button>
        </div>
      </div>
    );
  }
}

export default App;
