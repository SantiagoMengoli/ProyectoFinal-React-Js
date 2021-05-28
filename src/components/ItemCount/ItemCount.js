  
import React, { useState } from 'react';
import './ItemCount.css';
import { Button, Icon } from 'semantic-ui-react'



 const ItemCount = (props) => {
  
  
   const [count, setCount] = useState(0);

//Comentario
 const  handleIncrement = () => {
    setCount(count + 1);
  };

 const  handleDecrement = () => {
    count > 0 && setCount (count - 1 )
  };

  const handleAdd = () => {
    props.onAdd(count);
  }


    return (
      <div className="contador-container">
        <h1 className="productoElegido">Producto Elegido</h1>
        <p className="ceroCarrito">{count}</p>
        <div className="buttons-container">
          <Button primary onClick={handleIncrement}>+</Button>
          <Button primary onClick={handleDecrement}>-</Button>
        </div>
        <div className="agregarAlCarrito"> 
          <div>
              <Button onClick={handleAdd} className="buttonCarrito" animated='vertical'>
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
export default ItemCount;