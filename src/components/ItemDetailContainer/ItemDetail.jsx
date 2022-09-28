import React from 'react'
import "./ItemDetail.css"

export default function ItemDetail({data}) {
    return (
    <div className="cardDetail">
      <div className="cardImgDetail">
        <img src={data.image} alt=""/>
      </div>
      <div className="details">
      <h3>{data.title}</h3>
      <p>Contiene: {data.detail}</p>
      <h4>Precio: {data.price}</h4>
      </div>
    </div>
  )
}
