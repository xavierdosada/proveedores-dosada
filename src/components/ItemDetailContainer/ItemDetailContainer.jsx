import React from 'react'
import { useState, useEffect } from "react";
import { getSingleData } from '../../mockAPI';
import ItemDetail from './ItemDetail';



export default function ItemDetailContainer(props) {
    let [data, setData] = useState([]);
    useEffect(() => {
    getSingleData().then( respuestaDatos => setData(respuestaDatos));
  },[]);
  return (
    <div>
        <div className='detailContainer'>
            <ItemDetail data={data}/>
        </div>
    </div>
  )
}

