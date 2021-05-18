import React, { Component } from 'react';
import { Item } from '../Item/Item';
import Spinner from '../Spinner/Spinner'
import './ItemList.css';

class ItemList extends Component { 
   constructor(props) {
        super(props);
        this.state = {
            productoSeleccionado: []
        };
    }

    state = {
        loading : false
    }
    componentDidMount (){
        setTimeout(() => {
            this.setState ({loading: false}) 
        },5000);
    }
   
   /* componentDidMount(){
        setTimeout(() => {
            this.setState({
                productoSeleccionado: this.props.items,
            })
        }, 2000);
    }*/
    componentDidUpdate(){
        setTimeout(() => {
            this.setState({
                productoSeleccionado: this.props.items,
            })
        }, 2000);
    }
    render(){
        const {loading} = this.state
        return (
            <div className="ItemList">
               {loading ? <Spinner /> : null}
            {
              this.state.productoSeleccionado && this.state.productoSeleccionado.map((producto) => {
                return <Item item={producto} key={producto.id} />;
              })
            }
          </div>
    )}
   }

export default ItemList;