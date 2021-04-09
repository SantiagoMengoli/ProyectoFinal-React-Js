import './ItemListContainer.css'

function ItemListContainer(props) {
    return( 
    <h1 className="mensajeBienvenida"> 
      {
        props.mensaje
      } 
      </h1>
    )
  }

export default ItemListContainer;