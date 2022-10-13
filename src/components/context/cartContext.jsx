//inicializo e importo mi createContext
import React, { useState, createContext } from "react";
const cartCtxt = createContext();

//Defino mi provider
export default function CartContextProvider( { children } ){
    const [cartItems, setCartItems] = useState([]);

    function addItem(data, count){
        //creo una copia de cartItems
        if (isInCart(data.id)) {
            
            let backupCartItems = cartItems.map((itemCart) => {
                if(itemCart.id === data.id){
                    itemCart.countItems += count;
                    return itemCart
                } else return itemCart
                });

                setCartItems(backupCartItems);
        } else {
            let backupCartItems = cartItems.map( item => item);
            backupCartItems.push({...data, countItems: count});
            setCartItems(backupCartItems);
        }
    }

    function removeItem(data){
        let backupCartItems = cartItems.filter(item => item.id !== data.id)
        setCartItems(backupCartItems);
    }

    function totalItemsCart(){
        let totalItems = 0;
        cartItems.forEach((item) => {
            totalItems += item.countItems;
        })
        return totalItems;
    }

    function totalPrice(){
        let totalPrice = 0;
        cartItems.forEach((item) => {
            totalPrice += item.countItems * item.price;
        })
        return totalPrice;
    }

    function isInCart(id){
        let cartFound = cartItems.some((item) => item.id === id)
        return cartFound;
    }

    return (
        //paso mi objeto value a los hijos.
        <cartCtxt.Provider value={{ cartItems, addItem, removeItem, totalItemsCart, totalPrice, isInCart}}>
            {children}
        </cartCtxt.Provider>
    )   
}
//exporto mi createContext
export { cartCtxt }