import "./NavBar.css";
import "../CardWidget.jsx";
import CardWidget from "../CardWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
        <h2>
          <strong>MayoriStock</strong>
        </h2>
        <ul>          
          <li>
           <Link to="/">Productos</Link> 
          </li>
          <li>
             <Link to="/categoria/individual">Individuales</Link>
          </li>
          <li>
             <Link to="/categoria/porPack">Por Pack</Link>
          </li>
        </ul>
        <div className="icon">
          <a href="products"> < CardWidget /> </a>
        </div>
    </nav>
  );
}

export default NavBar;