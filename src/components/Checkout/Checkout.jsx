import React from 'react'
import { useParams } from 'react-router-dom';

export default function Checkout() {
  const { orderid } = useParams();
  return (
    <div>
        <h2>Felicitaciones tu compra fue realizada con exito<br/></h2>
        <h2>{`Este es el ID de tu compra: ${orderid} `}</h2>
    </div>
  )
}
