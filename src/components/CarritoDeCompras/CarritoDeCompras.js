import React, { useState } from 'react'
import './CarritoDeCompras.css'
import { Button } from 'semantic-ui-react'
import ButtonFinalizarCompra from '../ButtonFinalizarCompra/ButtonFinalizarCompra'

 function CarritoDeCompras (props) {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (detail) => {
    const exist = cartItems.find((x) => x.id === detail.id);
     if (exist) {
       setCartItems(cartItems.map((x) => x.id === detail.id ? {...exist, qty: exist.qty +1} : x
       )
       );
     } else {
       setCartItems ([...cartItems, { ...detail, qty: 1}]);
     }
  };

   const {onRemove} = props;
    return (
      <div>
        <h2 className="tituloCarritoCompras">Carrito de compras</h2>
          <div className="carritoVacio">
            {cartItems.length === 0 && <div> <b>El carrito esta vacio</b></div>}
          </div>
          {cartItems.map((item) => (
            <div key={item.id}> 
              <div>{item.name}</div>
              <div>
                <Button onClick ={()=>onAdd(item)}>+</Button>
                <Button onClick ={()=>onRemove(item)}>-</Button>
              </div>
              <div>
                {item.qty} x ${item.price.toFixed(2)}
              </div>
            </div>
          ))}
          <div className="finalizarCompra">
              <ButtonFinalizarCompra/>
          </div>
      </div>
    )
}
export default CarritoDeCompras;