import "./Item.css"
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.image} alt=""/>
      </div>
      <div className="cardDetail">
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
        <h4>{props.price}</h4>
        <Link to={`/details/${props.id}`}>
        <button>
          Detalles
        </button>
      </Link>
      </div>
    </div>
  );
}