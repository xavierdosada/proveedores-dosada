import Card from "./Cards/Card";

function ItemListContainer(props) {
  return (
    <div>
        <h1>{props.greeting}</h1>
        <div className="cardContainer">
            <Card 
            title="Gaseosa Pepsi" 
            price="$ 150" 
            detail="500ml, 0 azucares"
            initial={1}
            stock={10}
            image="https://images.rappi.com.ar/products/d38a9b4a-a15b-48aa-b726-3947b08cb827.png?d=200x200&e=webp"/>
            <Card 
            title="Gaseosa 7up" 
            price="$ 150" 
            detail="500ml"
            initial={1}
            stock={9}
            image="https://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-7up-sin-azucar-pet-1500-siempreencasa_1_500x.png?v=1643387499?nocache=0.11452011740766466"/>
            <Card 
            title="Gaseosa Mirinda" 
            price="$ 300" 
            detail="1500ml"
            initial={1}
            stock={8} 
            image="https://www.grupoelnene.com.ar/7355-large_default/mirinda-naranja-15lt.jpg"/>
            <Card 
            title="Gaseosa Schweppes" 
            price="$ 350" 
            detail="2250ml"
            initial={1}
            stock={7}
            image="http://d3ugyf2ht6aenh.cloudfront.net/stores/001/476/675/products/sheppes-pomelo-1-51-fe0a81b828cda804c216097128626175-640-0.jpg"/>
        </div>
    </div>
  );
}

export default ItemListContainer;