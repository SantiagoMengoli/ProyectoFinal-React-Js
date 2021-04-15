import React, { Component } from 'react';
import { Item } from '../Item/Item';
import './ItemDetail.css';

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
            <div className="ItemDetail">
            {
              this.state.detalleSeleccionado && this.state.detalleSeleccionado.map((detalles) => {
                return <Item item={detalles} key={detalles.id} />;
              })
            }
    
          </div>
    )}
   }

export default ItemDetail;