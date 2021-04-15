
import './App.css';
import  NavBar from './components/navbar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemCount from './components/ItemCount/ItemCount';
const App = () => {
  return(
      <div>
        <div className="barraHeader">
          <h1 className="tituloPrincipal">Tienda</h1>
          <NavBar/>
        </div>
        <ItemDetailContainer />
        
        <div>
          <ItemCount />
        </div>
      </div>
      
    );
  };


export default App;