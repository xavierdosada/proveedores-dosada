import { useState, useEffect } from "react";
import getData, { getDataFilter } from "../../src/mockAPI"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  console.log("data del itemListContainer: ", data);
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
          <ItemList item={data}/>
        </div>
    </div>
  );
}

export default ItemListContainer;