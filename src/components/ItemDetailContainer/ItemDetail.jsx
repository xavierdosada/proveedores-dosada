import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartCtxt } from "../context/CartContext";

export default function ItemDetail({data}) {
    const [cartState, setCartState] = useState(true);
    //me conecto al context con useContext
    const { addItem } = useContext(cartCtxt);

    function addToCart(count){
        addItem(data, count);
        setCartState(false);
    };

    return (
    <div className="singleCardDetail">
      <div className="singleCardImgDetail">
        <img src={data.image} alt=""/>
      </div>
      <div className="details">
      <h3>{data.title}</h3>
      <p>Contiene: {data.detail}</p>
      <h4>Precio: {data.price}</h4>
      { cartState === false ? (
      <Link to="/cart">{`Finalizar Compra`}</Link>
      ) : (
      <ItemCount initial={1} stock={data.stock} onAddToCart={addToCart}/>)}
      </div>
    </div>
  )
}
