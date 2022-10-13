import React from 'react'
import './CartView.css'
import { useContext, useState } from 'react';
import { cartCtxt } from '../context/CartContext';
import { totalPrice, removeItem } from '../context/CartContext';
import { Link } from 'react-router-dom'

function CartView() {   
    const context = useContext(cartCtxt);
    const { cartItems, totalPrice, removeItem } = context; //destructuring

        return cartItems.length ? (    
            <div>
                {cartItems.map((item) => (
                    <div className='CartViewContainer'>
                        <h3>{item.title}</h3>
                        <p>{`$ ${item.price} x unid`}</p>
                        <span>{`Unidades: ${item.countItems}`}</span>
                        <h3>{`Sub-Total: $ ${item.countItems * item.price}`}</h3>
                        <button onClick={() => {removeItem(item)}}> Eliminar del Carrito</button>
                    </div>
                ))}
                <h3>{`Total: $${totalPrice()}`}</h3> 
            </div>
        ) : (
            <div>
            <h3>Aún no tiene Items en el carrito</h3> 
            <Link to="/"> Volver a Productos </Link>
            </div>
        )
    }  

export default CartView