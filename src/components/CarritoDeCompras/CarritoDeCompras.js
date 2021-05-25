import React from 'react'
import './CarritoDeCompras.css'
import ButtonFinalizarCompra from '../ButtonFinalizarCompra/ButtonFinalizarCompra'

 const CarritoDeCompras = () => {
    return (
      <div>
        <h2 className="tituloCarritoCompras"> Carrito de Compras</h2>
        <div className="finalizarCompra">
          <ButtonFinalizarCompra/>
        </div>
      </div>
    )
}
export default CarritoDeCompras;