import React, { Component } from 'react';
import productos from '../Item/Item'

class BotinFutbol extends Component {
   constructor() {
        super();
        this.state = {
            productoSeleccionado: []
        };
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                productoSeleccionado: productos,
            })
        }, 2000);
    }
    render(){
        return (
        <div>
            <ul> {this.state.productoSeleccionado.map((a) => {
                   return <li>{a.marca} - {a.talle}</li>;})}
            </ul>
        </div>
    )}
   }

export default BotinFutbol;