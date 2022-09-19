import React from 'react'
import { useState } from 'react'
import "./ItemCount.css"

function ItemCount(props) {

    const [count, setCount] = useState(props.initial);

    function handleClickLess(){
      if (count > 1){
        setCount(count-1)
      }
    }

    function handleClickPlus(){
      if (count <= props.stock-1){
        setCount(count+1)
      }
    }

  return (
    <div className='countContainer'>
        <div className='lessButton' onClick={handleClickLess}> - </div>
        <h3> { count } </h3>
        <div className='plusButton' onClick={handleClickPlus}> + </div>
    </div>
  )
}

export default ItemCount;