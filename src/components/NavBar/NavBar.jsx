import "./NavBar.css";
import "../CardWidget.jsx";
import CardWidget from "../CardWidget";

function NavBar() {
  return (
    <nav className="NavBar">
        <h2>
          <strong>Proveduria</strong>
        </h2>
        <ul>
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <div className="icon">
          <a href="products"> < CardWidget /> </a>
        </div>
    </nav>
  );
}

export default NavBar;