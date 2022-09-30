import React from 'react'
import "./ItemDetail.css"
import ItemCount from '../ItemCount/ItemCount';

export default function ItemDetail({data}) {
    return (
    <div className="singleCardDetail">
      <div className="singleCardImgDetail">
        <img src={data.image} alt=""/>
      </div>
      <div className="details">
      <h3>{data.title}</h3>
      <p>Contiene: {data.detail}</p>
      <h4>Precio: {data.price}</h4>
      <ItemCount initial={1} stock={data.stock}/>
      </div>
    </div>
  )
}
