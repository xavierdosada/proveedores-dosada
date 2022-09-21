import React from 'react'
import Card from "./Cards/Item";

export default function ItemList(props) {
  return (
    <div className="cardContainer">{props.data.map((item) => {
        return <Card 
          key={item.key}
          title={item.title}
          price={item.price}
          detail={item.detail}
          image={item.image}
          stock={item.stock}
        />
        })
      }</div>
  )
}
