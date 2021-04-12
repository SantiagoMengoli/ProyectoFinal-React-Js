import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'

function ItemListContainer() {

  var productos = [
    { id: 1, marca: "Adidas", nombre: "Adizero", tipo: "pasto natural", precio: "$7500", talle: "42", foto: Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak_7JOdFh0pmo81r31mQZOQkKUwPN7MTnkfNLnnikaN7uowLuayPSRPv79t6rC9sqx87kyEd_&usqp=CAc"},
    { id: 2, marca: "Nike", nombre: "Mercurial", tipo: "pasto sintetico", precio: "$5000", talle: "41", foto: Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak_7JOdFh0pmo81r31mQZOQkKUwPN7MTnkfNLnnikaN7uowLuayPSRPv79t6rC9sqx87kyEd_&usqp=CAc" },
    { id: 3, marca: "Puma", nombre: "Monarch", tipo: "pasto natural", precio: "$6500", talle: "38", foto: Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak_7JOdFh0pmo81r31mQZOQkKUwPN7MTnkfNLnnikaN7uowLuayPSRPv79t6rC9sqx87kyEd_&usqp=CAc" },
    { id: 4, marca: "Adidas", nombre: "Predator", tipo: "pasto natural", precio: "$7500", talle: "43", foto: Image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRak_7JOdFh0pmo81r31mQZOQkKUwPN7MTnkfNLnnikaN7uowLuayPSRPv79t6rC9sqx87kyEd_&usqp=CAc" },
  ]



  return (
    <div className="botinStyle">
      <ItemList items={productos}/>
    </div>
  )
}

export default ItemListContainer;