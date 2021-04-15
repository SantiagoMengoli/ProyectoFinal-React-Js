import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'

function ItemDetailContainer() {

    var detalles = [
      { id: 1, marca: "Marca: Adidas", nombre: "Modelo: Adizero", tipo: " Tipo: Pasto natural", precio: " Precio: $7500", talle: " Talle: 42", foto: "https://www.digitalsport.com.ar/files/products/56aa2a3006050-334376-500x500.jpg", Origen: "Brazil", colores: "Colores: Blanco Rojo Celeste" },
    ]
  
  
  
    return (
      <div className="botinStyle">
        <ItemDetail items={detalles}/>
      </div>
    )
  }
  
  export default ItemDetailContainer;

