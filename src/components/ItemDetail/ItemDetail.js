
import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import ButtonFinalizarCompra from '../ButtonFinalizarCompra/ButtonFinalizarCompra'
import {
    Link
  } from "react-router-dom";




const ItemDetail = ({detail}) => {

    const  [cart, setAddcart] = useState([])
    const  [mostrarBotonCompra, setMostrarBotonCompra] = useState (false)

    const  onAdd = (item) => {
        setAddcart ([...cart, item]);
        setMostrarBotonCompra (true);
        }

        return (
            <div>
                <div className="conteainerDetalles">
                    <div className="fotosProducto">
                    <img alt="" className="foto" src={detail.foto}></img>
                    </div>
                    <div className="ItemDetail" >
                        {detail.marca}
                        <br></br>
                        {detail.nombre}
                        <br></br>
                        {detail.tipo}
                        <br></br>
                        {detail.info}
                        <br></br>
                        {detail.precio}
                        <br></br>
                        {detail.talle}
                        <br></br>
                        {detail.origen}
                    </div>    

                   
                </div>
                <div >
                       {
                            mostrarBotonCompra
                                ?
                                <div className="mostrarBotonCompra"> 
                                    <Link
                                    to="/cart" 
                                    className="buy-button" 
                                    onClick={() => setMostrarBotonCompra (true) }> <ButtonFinalizarCompra />
                                    </Link> 
                                </div>
                                :
                                <div><ItemCount onAdd={onAdd}/></div> 
                       }
                       
                    </div>
                
            </div>
                
                
    )
   }

export default ItemDetail;