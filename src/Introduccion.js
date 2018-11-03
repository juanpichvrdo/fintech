import React, { Component } from "react";

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
          />
          <input
            type="number"
            value={edad}
            onChange={this.handleOnChange}
            name="edad"
            placeholder="Edad"
            required
          />
          <label>
            <input
              type="radio"
              value="rojo"
              onChange={this.handleOnChange}
              name="color"
            />
            Rojo
          </label>
          <label>
            <input
              type="radio"
              value="azul"
              onChange={this.handleOnChange}
              name="color"
            />
            Azul
          </label>
          <label>
            <input
              type="radio"
              value="verde"
              onChange={this.handleOnChange}
              name="color"
            />
            Verde
          </label>
          <label>
            <input
              type="radio"
              value="naranja"
              onChange={this.handleOnChange}
              name="color"
            />
            Naranja
          </label>
          <label>
            <input
              type="radio"
              value="morado"
              onChange={this.handleOnChange}
              name="color"
            />
            Morado
          </label>
          <button onClick={this.changePage}>Inicio</button>
          <button type="submit" onClick={this.showAlert}>
            Continuar
          </button>
        </form>
      </div>
    );
  }
}

export default Introduccion;
