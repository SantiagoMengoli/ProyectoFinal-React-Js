  
import React, { Component } from 'react';
import './ItemCount.css';
import { Button } from 'semantic-ui-react'
import ButtonExampleAnimated from '../ButtonDetail/ButtonDetail'

export default class ItemCount extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }
//Comentario
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrement = () => {
    if (this.state.count === 0){
      return;  
    }
    this.setState({count: this.state.count - 1});
  };

  render() {
    return (
      <div className="contador-container">
        <h1 className="productoElegido">Producto Elegido</h1>
        <p className="ceroCarrito">{this.state.count}</p>
        <div className="buttons-container">
          <Button primary onClick={this.handleIncrement}>+</Button>
          <Button primary onClick={this.handleDecrement}>-</Button>
        </div>
        <div className="agregarAlCarrito">
        <ButtonExampleAnimated/>
        </div>
      </div>
    );
  }
}