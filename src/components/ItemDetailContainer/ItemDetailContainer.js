import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


var detalles = [
  { id: 1, marca: "Marca: Adidas", nombre: "Modelo: Adizero", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "https://www.digitalsport.com.ar/files/products/56aa2a3006050-334376-500x500.jpg", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },
  { id: 2, marca: "Marca: Nike", nombre: "Modelo: Mercurial", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/82be5391-bc8b-4eca-871b-c3428632b30c/calzado-de-f%C3%BAtbol-para-terreno-firme-mercurial-superfly-8-elite-fg-DBtHQg.png", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },
  { id: 3, marca: "Marca: Puma", nombre: "Modelo: Monarch", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMREhMTEhETFhIVGRcWGBURGBgXGBYWGBcYFhYWFRUYHSggGBslGxcXITEiJTUrMC4uGB8zODMsNygtLisBCgoKDg0NFQ8OEisZHRkrKysrLS0rKysrNysrKysrKysrKystKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAwADAQEAAAAAAAAAAAAABQYHAwQIAgH/xABDEAABAwICBwUGAwQIBwAAAAABAAIDBBEhMQUGEkFRYXEHEyKBkTJCUmKhsSPB8BQzguFDU2NykrLR8RUWJDSDs8L/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAwDAQACEQMRAD8A3FERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEVX05r/Q0pLXTd5IL3ZANsgjMF3stPIm6qlT2zQhw2KVxbvL5A0+QDSPqg1NFD6saxwaQh72Bxwwcx2DmOzs4fYjAqYQERR2sGl2UcEk8nssGW9zibNaOZJAQSKLEZ9Yaipf3oqpI5b3aI3EMbwaGXs4brEG+9aXqprUyrGw+zKlo8UZ962b4z7zeWY37iQsaIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAql2oaUfT0Endu2ZJfwgRmA5ri8g7jstcAdxIKtqy7torwO4h5OkI6+Bv2egxauqPCOQAw5KM213NIXAsd2H1UfdBc+zjWp1BUtfiY3eGRo95nL5gcR5jC5XpehrI5o2yRPD43i7XNyI/I8ty8bNfZWzVbXypof3UnhOJY/xMd1buPMWKD1Isv7e5XNpqUD2DMSf7wjdsj0Lz5clHUHbg2w76kueMT/8A4cPzUT2ido0GkKQ04gkjftseHSFp2dk42a0k3IJG7NB89mdJQTj/AKiV7qjaIEFy1uwG7XeXbiQAHXJIAtllecqdaaOKQiigj22mzag+IczHck2OIvhhdZDTwusZGbdm5ua0+HdclpJaN11y09eW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Rpacrjg4cwbEcwqPMpauIsWv1XZXc/h1DbfO03HmDj9EZ2Tt96pv0jt6eNSDIO7X22PlhyWxt7K4d80nkGj7grtwdmNKM3zO6uaPswJBiwpj6/Vfn7I7gt5p+zuib/ROd1fJ9g4BSUOqlJFYimjB3FzAT5F10g8/UOhZpjaON7z8jSbdSMvNWzRHZlUyWMpbEOfjd/habfVbOyFjcAOgC7mkdESmEinlZHMbWdIwvaOPhBFzbf8AQoKfq5qHBAWlse3IPfkxseIGTfvzWg6PoxGPmOZ/IKJ1W1flpdt9RVvqJngAucAxjQLm0cYwbnjxsMArCoCIiAiIgIiICIiAiIgIiICIiAiIgKmVXZdoySbvnU52i7bcwSP7tzibm8d7WvuFhyVzRAAWcdoutf8AwyeIPhLoZmOIc02cHtPiaAcCLFpzGa0dcVRTMkGzIxr28HgOHoUFC7MNPjSTqibuSxkWyxpc7a2nOu597CwIAbx9pX4wtObW+gX5T07I27MbGsaPdYA0egXKgqWvukho+n/aREXsD2Mc1hDdkONg71sLcSFVNWNe466ugpo4JAHlxc6QtFmsY5/stJvctAzGa1Guo45o3RSsa+N4s5jwC1w4EFdLROrlJSuLqelgic4WLomNaSOFwL25IJRdLTNCZ4ZI2vLHua4Nkb7Ubi0hr28wTdd1EGMUOpenJ5I21VQGQse3aJmvttabmzYxd9wPftnitnREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q==", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },
  { id: 4, marca: "Marca: Adidas", nombre: "Modelo: Predator", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "data:image/jpeg;base64,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lvN19rT8sRr38uSNyDiV1FOmfAEX8tbSGxGEamxWorIw6OpW+2ovuNek7paa5ztwJsZhmp02C1VYPTZiQAQe0CQCbFSw9QeklsUTwmLr7Vn5qxr28OW0gTtNp4PyfXq2NQ+7Q666u234fw+p9JFcM9nfEfeJ72rTFNXVmtUZsyhgWUAKNwCNbbzsNpK4YifLpm/UbTGqePdr+F5QwialC5HV2LfTb6TNbgGFO+HpHzpqf2kpE6xERxDwWzZLTubT/Lk/MnIOMbEucI6LQexAZsnuyfiUAKTl6i3fbpOicu8ObD4ajQdszU0Cswv2iNzrrvJOeyxEQza9rfVO3sRErJERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//9k=", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },
  { id: 5, marca: "Marca: Adidas", nombre: "Equipo: River Plate", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "data:image/jpeg;base64,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", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },
  { id: 6, marca: "Marca: Nike", nombre: "Equipo: Barcelona", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "data:image/jpeg;base64,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", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },
  { id: 7, marca: "Marca: Puma", nombre: "Equipo: Manchester City", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "https://essential.vteximg.com.br/arquivos/ids/259739-454-423/962-1144_1.jpg?v=636990631998700000", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },
  { id: 8, marca: "Marca: Under Armor", nombre: "Equipo: Estudiantes", tipo: "Botines con tapones altos para campos de juego humedos.", info: "Botines de gran calidad para amateurs o profesionales para el mejor desemeño en una cancha de futbol de pasto natural.", precio: " Precio: $7500", talle: " Talle: 42", foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG4P2BrWHv-Bufd8Ys7RLosWQBlILNbmUuFRf08GYJDQMHj44Uam30ibk_sCqNXIyomyrdde2v&usqp=CAc", Origen: "Origen: Brazil.", colores: "Colores: Blanco Rojo Celeste" },

]


function ItemDetailContainer() {
    const [detail, setDetail] = useState([])
    const { id } = useParams();

    
    useEffect(() => {
      setDetail(detalles)
    }, [id])
    
    return (
      <div className="detallesProducto">
        <h1 className="tituloDetalles">Detalle de tu producto</h1>
        {
          detail.map((item) => (
            <div key = {detail.id}> <ItemDetail detail={item}/> </div>
          ))
        }
      </div>
    )
  }
  
  export default ItemDetailContainer;

