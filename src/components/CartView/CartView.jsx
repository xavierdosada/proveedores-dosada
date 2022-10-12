import React from 'react'
import { useContext } from 'react';
import { cartCtxt } from '../context/cartContext';
import { totalPrice } from '../context/cartContext';

function CartView() {
    const context = useContext(cartCtxt);
    const { cartItems } = context; //destructuring
    const { totalPrice } = useContext(cartCtxt);
    {console.log("cart: ", cartItems)}

    return (    
    <div>
        {cartItems.map((item) => (
            <div>
                <h3>{item.title}</h3>
                <p>{`$ ${item.price} x unid`}</p>
                <span>{`Unidades: ${item.countItems}`}</span>
                <h3>{`Sub-Total: $ ${item.countItems * item.price}`}</h3>
            </div>
        ))}
        <h3>{`Total: ${totalPrice()}`}</h3>
    </div>
    );
}

export default CartView