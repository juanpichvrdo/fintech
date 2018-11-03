import React, { Component } from "react";
import "./introduccion.scss";

class Introduccion extends Component {
  state = {
    randomColor: "",
    nombre: "",
    edad: "",
    color: ""
  };

  componentDidMount = () => {
    const randomColorStorage = sessionStorage.getItem("randomColor");
    const randomColor = JSON.parse(randomColorStorage);

    this.setState({ randomColor });
  };

  changePage = () => {
    this.props.history.push("/");
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  showAlert = () => {
    const { nombre, edad, color } = this.state;

    if (nombre && edad && color) {
      alert(
        `Mi nombre es ${nombre}, tengo ${edad} años y me gusta el ${color}.`
      );
    } else if (nombre && edad) {
      alert(`Mi nombre es ${nombre}, tengo ${edad} años.`);
    }
  };

  render() {
    const { nombre, edad, randomColor } = this.state;
    return (
      <div className="introduccion" style={{ background: randomColor }}>
        <h2 className="introduccion__heading">Introduccion</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={nombre}
            onChange={this.handleOnChange}
            name="nombre"
            placeholder="Nombre"
            required
            className="form__input"
          />
          <input
            type="number"
            value={edad}
            onChange={this.handleOnChange}
            name="edad"
            placeholder="Edad"
            required
            className="form__input"
          />
          <div className="form__radioGroup">
            <input
              type="radio"
              value="rojo"
              onChange={this.handleOnChange}
              name="color"
              className="rojo"
              id="rojo"
            />
            <label for="rojo" className="rojo">
              Rojo
            </label>

            <input
              type="radio"
              value="azul"
              onChange={this.handleOnChange}
              name="color"
              className="azul"
              id="azul"
            />
            <label for="azul" className="azul">
              Azul
            </label>

            <input
              type="radio"
              value="verde"
              onChange={this.handleOnChange}
              name="color"
              className="verde"
              id="verde"
            />
            <label for="verde" className="verde">
              Verde
            </label>

            <input
              type="radio"
              value="amarillo"
              onChange={this.handleOnChange}
              name="color"
              className="amarillo"
              id="amarillo"
            />
            <label for="amarillo" className="amarillo">
              Amarillo
            </label>

            <input
              type="radio"
              value="morado"
              onChange={this.handleOnChange}
              name="color"
              className="morado"
              id="morado"
            />
            <label for="morado" className="morado">
              Morado
            </label>
          </div>
          <div className="page__buttons">
            <button type="submit" onClick={this.showAlert}>
              Submit
            </button>
            <button onClick={this.changePage}>Inicio</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Introduccion;
