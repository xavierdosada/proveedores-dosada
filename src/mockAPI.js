const data = [
    { 
        key:"1",
        title:"Gaseosa Pepsi", 
        price:"$ 150", 
        detail:"500ml, 0 azucares",
        image:"https://images.rappi.com.ar/products/d38a9b4a-a15b-48aa-b726-3947b08cb827.png?d=200x200&e=webp",
        stock: 6,
    },
    {   
        key:"2",
        title:"Gaseosa 7up", 
        price:"$ 150", 
        detail:"500ml",
        image:"https://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-7up-sin-azucar-pet-1500-siempreencasa_1_500x.png?v=1643387499?nocache=0.11452011740766466",
        stock: 7,
    },
    {    
        key:"3", 
        title:"Gaseosa Mirinda", 
        price:"$ 300", 
        detail:"1500ml", 
        image:"https://www.grupoelnene.com.ar/7355-large_default/mirinda-naranja-15lt.jpg",
        stock: 8,
    },
    {
        key:"4",
        title:"Gaseosa Schweppes", 
        price:"$ 350", 
        detail:"2250ml",
        image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/476/675/products/sheppes-pomelo-1-51-fe0a81b828cda804c216097128626175-640-0.jpg",
        stock: 9,
    },
];

export default function getData(){
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            if (resolve){
                resolve(data);
            } else {
                reject("Error al obtener datos")
            }
        },2000)
    });
}