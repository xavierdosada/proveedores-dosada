//inicializo e importo mi createContext
import React, { useState, createContext } from "react";
const cartCtxt = createContext();

//Defino mi provider
export default function CartContextProvider( { children } ){
    const [cartItems, setCartItems] = useState([]);

    function addItem(data, count){
        //creo una copia de cartItems
        let backupCartItems = cartItems.map( item => item);
        backupCartItems.push({...data, countItems: count});
        setCartItems(backupCartItems);
    }

    function totalItemsCart(){
        let totalItems = 0;
        cartItems.forEach((item) => {
            console.log("item.countItems: ",item.countItems)
            totalItems += item.countItems;
        })
        return (totalItems);
    }

    function totalPrice(){
        let totalPrice = 0;
        cartItems.forEach((item) => {
            console.log("price: ", item.price)
            totalPrice += item.countItems * item.price;
        })
        return (totalPrice);
    }

    return (
        //paso mi objeto value a los hijos.
        <cartCtxt.Provider value={{ cartItems, addItem, totalItemsCart, totalPrice }}>
            {children}
        </cartCtxt.Provider>
    )   
}
//exporto mi createContext
export { cartCtxt }