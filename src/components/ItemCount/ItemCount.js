  
import React, { Component } from 'react';
import './ItemCount.css';
import { Button, Icon } from 'semantic-ui-react'



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
        <input value={this.state.count} className="ceroCarrito" />
        <div className="buttons-container">
          <Button primary onClick={this.handleIncrement}>+</Button>
          <Button primary onClick={this.handleDecrement}>-</Button>
        </div>
        <div className="agregarAlCarrito">
          <div>
              <Button onClick={this.props.onAdd} className="buttonCarrito" animated='vertical'>
                <Button.Content hidden>Agregar al Carrito</Button.Content>
                <Button.Content visible>
                  <Icon name ='shop' />
                </Button.Content>
              </Button>
          </div>
        </div>
      </div>
    );
  }
}