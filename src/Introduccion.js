import React, { Component } from "react";

class Introduccion extends Component {
  state = {
    nombre: "",
    edad: 1,
    color: ""
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
    const introductionText = `Mi nombre es ${nombre}, tengo ${edad} años y me gusta el ${color}.`;
    alert(introductionText);
  };
  render() {
    const { nombre, edad } = this.state;
    return (
      <div className="introduccion">
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
