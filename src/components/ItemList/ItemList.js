import React, { Component } from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';

class ItemList extends Component { 
   constructor(props) {
        super(props);
        this.state = {
            productoSeleccionado: []
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                productoSeleccionado: this.props.items,
            })
        }, 2000);
    }
    render(){
        return (
            <div className="ItemList">
            {
              this.state.productoSeleccionado && this.state.productoSeleccionado.map((producto) => {
                return <Item item={producto} key={producto.id} />;
              })
            }
    
          </div>
    )}
   }

export default ItemList;