
import './App.css';
import  NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';
const App = () => {
  return(
      <div>
        <div className="barraHeader">
          <h1 className="tituloPrincipal">Tienda</h1>
          <NavBar/>
        </div>
        <ItemListContainer mensaje="Bienvienido! Buen Dia!"/>
        
        <div>
          <ItemCount />
        </div>
      </div>
      
    );
  };


export default App;