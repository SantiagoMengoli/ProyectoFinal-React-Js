import CartWidget from '@material-ui/icons/ShoppingCart';
import './style.css';
import {
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
                <Link to="/cart" className="palabrasMenu">
                    <CartWidget/>
                </Link>
            </nav>
        </div>
      );
    };
    export default NavBar;