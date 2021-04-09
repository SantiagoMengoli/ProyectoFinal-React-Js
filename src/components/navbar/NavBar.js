import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './style.css';

const NavBar = () => {
    return(
        <div className="navMenu--container">
            <nav className="navMenu">
                <a className="palabrasMenu" href="/#">Inicio</a>
                <a className="palabrasMenu" href="/#">Productos</a>
                <a className="palabrasMenu" href="/#">Info</a>
                <a className="palabrasMenu" href="/#">Contacto</a>
                <a className="palabrasMenu" href="/#"><AddShoppingCartIcon/></a>
            </nav>
        </div>
      );
    };
    export default NavBar;