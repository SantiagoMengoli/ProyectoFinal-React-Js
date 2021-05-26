
import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'




const ItemDetail = ({detail}) => {


    const  [cart, setAddcart] = useState([])

    const  onAdd = (item) => {
        setAddcart ([...cart, item])
           alert ('Agregaste ' + [detail.nombre])
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
                <div>
                    <ItemCount onAdd={onAdd}/>
                </div>
            </div>
                
                
    )
   }

export default ItemDetail;