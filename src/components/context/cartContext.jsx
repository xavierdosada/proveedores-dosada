//inicializo e importo mi createContext
import React, { useState, createContext } from "react";
const cartCtxt = createContext();

//Defino mi provider
export default function CartContextProvider( { children } ){
    const [cartItems, setCartItems] = useState([]);

    function addItem(data, count){
        console.log("Desde context: ", "data: ", data, "count: ", count);
    }

    return (
        //paso mi objeto value a los hijos.
        <cartCtxt.Provider value={{ cartItems, addItem }}>
            {children}
        </cartCtxt.Provider>
    )   
}

//exporto mi createContext
export { cartCtxt }