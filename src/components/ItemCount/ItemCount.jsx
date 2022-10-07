import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

function ItemCount({initial, stock, onAddToCart}) {
    const [count, setCount] = useState(initial);
    
    function handleClickLess(){
      if (count > 1){
        setCount(count-1)
      }
    };

    function handleClickPlus(){
      if (count <= stock-1){
        setCount(count+1)
      }
    };

  return (
    <>
    <div className='countContainer'>
        <div className='lessButton' onClick={handleClickLess}> - </div>
        <h3> { count } </h3>
        <div className='plusButton' onClick={handleClickPlus}> + </div>
    </div>
    <div>
      <button onClick={() => onAddToCart(count)}>Agregar al Carrito</button>
    </div>
    </>
  )
}

export default ItemCount;