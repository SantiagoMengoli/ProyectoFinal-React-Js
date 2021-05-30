
import './App.css';
import  NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Footer from './components/Footer/Footer'
import CarritoDeCompras from './components/CarritoDeCompras/CarritoDeCompras'
import {CartContextProvider} from './CartContext/CartContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App  () {
  return(
    <Router>
      <CartContextProvider>
      <div>
          <div className="barraHeader">
            <Link to="/" className="tituloPrincipal">
            <h1>Deportify</h1>
            </Link>
            <NavBar/>
          </div>
            <Switch>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route exact path="/category/:id">
                <ItemListContainer/>
              </Route>
              <Route exact path="/category/:id">
                <ItemListContainer />
              </Route>
              <Route path="/item/:id" >
                <ItemDetailContainer/>
              </Route>
              <Route  path="/cart">
                <CarritoDeCompras/>
              </Route>
            </Switch>
          <div className="footer">
            <Footer/>
          </div>
      </div>
      </CartContextProvider>
    </Router>
     
    );
  };


export default App;