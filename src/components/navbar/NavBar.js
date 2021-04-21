import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navMenu--container">
            <nav className="navMenu">
                <Link to="/" className="palabrasMenu">
                    Inicio
                </Link>
                <Link to="/category/botines" className="palabrasMenu">
                    Botines
                </Link>
                <Link to="/category/camisetas" className="palabrasMenu">
                    Camisetas
                </Link>
                <Link to="/" className="palabrasMenu">
                    Contacto
                </Link>
                <Link to="/" className="palabrasMenu">
                    <AddShoppingCartIcon/>
                </Link>
            </nav>
        </div>
      );
    };
    export default NavBar;