import { useState, useEffect } from "react";
import { getData, getDataFilter } from "../services/firestore"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  const { category } = useParams();
  
  useEffect(() => {
    if (category === undefined){
      getData().then( respuestaDatos => setData(respuestaDatos));
    }
    else {
      getDataFilter(category).then( respuestaDatos => setData(respuestaDatos));
    }
  },[category]);
  
  return (
    <div>
        <h1>{props.greeting}</h1>
        <div>
          <ItemList data={data}/>
        </div>
    </div>
  );
}

export default ItemListContainer;