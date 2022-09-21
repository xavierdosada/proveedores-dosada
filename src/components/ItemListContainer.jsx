import { useState, useEffect } from "react";
import getData from "../../src/mockAPI"
import ItemList from "./ItemList"

function ItemListContainer(props) {
  let [data, setData] = useState([]);
  useEffect(() => {
    getData().then( respuestaDatos => setData(respuestaDatos));
  },[]);
  

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