import React from 'react'
import { useState, useEffect } from "react";
import { getSingleData } from '../../services/firestore';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer() {
    let [data, setData] = useState([]);

    const { itemid } = useParams();
  
    useEffect(() => {
    getSingleData(itemid).then( respuestaDatos => setData(respuestaDatos));
  },[itemid]);

  return (
    <div>
        <div className='detailContainer'>
            <ItemDetail data={data}/>
        </div>
    </div>
  )
}

