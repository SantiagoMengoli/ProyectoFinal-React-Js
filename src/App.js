
import './App.css';
import  NavBar from './components/navbar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Botines from './views/Botines/Botines'
import Camisetas from './views/Camisetas/Camisetas'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const App = () => {
  return(
    <Router>
      <div>
          <div className="barraHeader">
            <Link to="/" className="tituloPrincipal">
            <h1 >Tienda</h1>
            </Link>
            <NavBar/>
          </div>
          <Switch>
            <Route path="/" exact>
              <ItemListContainer />
            </Route>
            <Route path="/botines">
              <Botines />
            </Route>
            <Route path="/camisetas">
              <Camisetas />
            </Route>
            <Route path="/item/id">
              <ItemDetailContainer/>
            </Route>
          </Switch>
          <div>
            <ItemCount />
          </div>
      </div>
      
    </Router>
     
    );
  };


export default App;