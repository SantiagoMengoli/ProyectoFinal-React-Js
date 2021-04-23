
import React, { Component } from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'


class ItemDetail extends Component {
   constructor(props) {
        super(props);
        this.state = {
            detalleSeleccionado: []
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                detalleSeleccionado: this.props.items,
            })
        }, 2000);
    }
    render(){
        return (
            <div>
              <div className="ItemDetail" >
                  <div className="fotosProducto">
                  <h1 className="tituloProducto">Adidas Adizero F50</h1>
                      <img src="https://www.digitalsport.com.ar/files/products/56aa2a3006050-334376-500x500.jpg" width= "80%"></img>
                  </div>
                  <div className="detallesProducto">
                      <p>Talle: 42 </p>
                      <br></br>
                      <p>Botines con tapones altos para campos de juego humedos.</p>
                      <br></br>
                      <p>Origen: Brazil.</p>
                      <br></br>
                      <p>Colores Disponibles: Azul  Rojo  Naranja</p>
                      <br></br>
                      <p>Botines de gran calidad para amateurs o profesionales para el mejor 
                          desemeño en una cancha de futbol de pasto natural.</p>
                      <br></br>
                      <p>Precio: $7500</p>
                  </div>
                </div>
                <div>
                  <ItemCount />
                </div>
                    
            </div>
                
                
    )}
   }

export default ItemDetail;