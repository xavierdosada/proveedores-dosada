import React from 'react'
import './CartView.css'
import { useContext, useState } from 'react';
import { cartCtxt } from '../context/CartContext';
// import { totalPrice, removeItem } from '../context/CartContext';
import { Link } from 'react-router-dom'
import { newbuyOrder } from '../../services/firestore';

function CartView() {   
    const context = useContext(cartCtxt);
    const { cartItems, totalPrice, removeItem } = context; //destructuring

    function handleCheckOut(){
        //{ buyer: {name, phone, email}, items: [{id, title, price}], total}
        const buyOrderData = {
            buyer: {
                name: "Xavier",
                phone: "123123213",
                email: "xavierdosada@gmail.com"
            },
            items: cartItems,
            total: totalPrice()
        }

        newbuyOrder(buyOrderData).then( respuesta => {
            alert(respuesta)
        });
    }
    
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
                <button onClick={handleCheckOut}>Finalizar Compra</button>
            </div>
        ) : (
            <div>
            <h3>Aún no tiene Items en el carrito</h3> 
            <Link to="/"> Volver a Productos </Link>
            </div>
        )
    }  

export default CartView