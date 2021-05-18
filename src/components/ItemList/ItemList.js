
import React, { Component } from 'react';
import { Item } from '../Item/Item';
import Spinner from '../Spinner/Spinner'
import './ItemList.css';


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productoSeleccionado: [],
      loading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        productoSeleccionado: this.props.items,
      })
    }, 2500);
  }


  componentDidUpdate() {
    setTimeout(() => {
      this.setState({
        productoSeleccionado: this.props.items,
      })
    }, 2000);
  }
  
  render() {

    return (
      <div className="ItemList">
        {
          this.state.loading ? <Spinner />
            : (
              this.state.productoSeleccionado && this.state.productoSeleccionado.map((producto) => {
                return <Item item={producto} key={producto.id} />;
              })
            )
        }
      </div>
    )
  }
}

export default ItemList;