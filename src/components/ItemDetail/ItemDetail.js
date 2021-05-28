
import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import ButtonFinalizarCompra from '../ButtonFinalizarCompra/ButtonFinalizarCompra'
import {
    Link
  } from "react-router-dom";
import CartContext from '../CartContext/CartContext';




const ItemDetail = ({detail, props}) => {

    const  [mostrarBotonCompra, setMostrarBotonCompra] = useState (false)
    const  [cantidadCompra, setCantidadCompra] = useState();

    const  onAdd = (count) => {
        setCantidadCompra (count);
        setMostrarBotonCompra (true);

        
        }

    //Agrego Context del CartContext
    const { agregarItem } = useContext(CartContext);
    const carritoContext = () => {
        const {detail} = props;
        agregarItem(detail, cantidadCompra);
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
                                    <div className="cantidadCompra">
                                        <p><b>Cantidad Seleccionada: {cantidadCompra}</b></p>
                                    </div>
                                    
                                    <Link
                                    to="/cart" 
                                    className="buy-button" 
                                    onClick={() => carritoContext()  }> <ButtonFinalizarCompra />
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