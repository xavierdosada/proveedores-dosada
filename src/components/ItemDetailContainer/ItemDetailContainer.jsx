import React from 'react'
import { useState, useEffect } from "react";
import { getSingleData } from '../../mockAPI';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';


export default function ItemDetailContainer() {
    let [data, setData] = useState([]);

    const { itemid } = useParams();
    console.log("params: ", itemid);
  
    useEffect(() => {
    getSingleData(itemid).then( respuestaDatos => setData(respuestaDatos));
  },[itemid ]);

  return (
    <div>
        <div className='detailContainer'>
            <ItemDetail data={data}/>
        </div>
    </div>
  )
}

