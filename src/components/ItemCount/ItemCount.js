  
import React, { Component, props } from 'react';
import './ItemCount.css';
import { Button } from 'semantic-ui-react'
import ButtonExampleAnimated from '../ButtonDetail/ButtonDetail'
import {
  Link
} from "react-router-dom";


export default function ItemCount  (props)  {
  const {onAdd, detail} = props;
  


    return (
      <div className="contador-container">
        <h1 className="productoElegido">Agregar al Carrito</h1>
        <div className="agregarAlCarrito">
          <Link to="/cart">
              <ButtonExampleAnimated  onClick ={()=>onAdd(detail)}/>
          </Link>
        </div>
      </div>
    );
  
}