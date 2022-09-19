import "./Card.css"
import ItemCount from "../ItemCount/ItemCount";

function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <div className="cardImg">
        <img src={props.image} alt=""/>
      </div>
      <div className="cardDetail">
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
        <h4>{props.price}</h4>
        <ItemCount initial={props.initial} stock={props.stock} />
      </div>
    </div>
  );
}

export default Card;