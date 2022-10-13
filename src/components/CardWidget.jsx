import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { cartCtxt } from "./context/CartContext";

import React from 'react'
import { useContext } from "react";

export default function CardWidget() {
  const { totalItemsCart } = useContext(cartCtxt);

  return (
    <div>
      <FontAwesomeIcon icon={faCartShopping}/>
      <span className="circleWidget">{ totalItemsCart() }</span>
    </div>
  )
}
 