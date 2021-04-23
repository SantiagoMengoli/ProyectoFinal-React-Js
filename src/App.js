
import './App.css';
import  NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import CarritoDeCompras from './components/CarritoDeCompras/CarritoDeCompras'

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
            <h1 >Deportify</h1>
            </Link>
            <NavBar/>
          </div>
          <Switch>
            <Route path="/" exact>
              <ItemListContainer />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer />
            </Route>
            <Route path="/item/:id">
              <ItemDetailContainer/>
            </Route>
            <Route path="/cart">
              <CarritoDeCompras/>
            </Route>

          </Switch>
          
          <div className="footer">
            <Footer/>
          </div>
      </div>
      
    </Router>
     
    );
  };


export default App;