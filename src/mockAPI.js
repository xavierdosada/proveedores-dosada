const data = [
    { 
        key:"1",
        id:"1",
        title:"Gaseosa Pepsi", 
        price:"$ 190", 
        detail:"500ml, 0 azucares",
        image:"https://images.rappi.com.ar/products/d38a9b4a-a15b-48aa-b726-3947b08cb827.png?d=200x200&e=webp",
        stock: 6,
        category: "individual",
    },
    {   
        key:"2",
        id:"2",
        title:"Gaseosa 7up", 
        price:"$ 180", 
        detail:"500ml",
        image:"https://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-7up-sin-azucar-pet-1500-siempreencasa_1_500x.png?v=1643387499?nocache=0.11452011740766466",
        stock: 7,
        category: "individual",
    },
    {    
        key:"3", 
        id:"3",
        title:"Gaseosa Mirinda", 
        price:"$ 220", 
        detail:"1500ml", 
        image:"https://www.grupoelnene.com.ar/7355-large_default/mirinda-naranja-15lt.jpg",
        stock: 8,
        category: "individual",
    },
    {
        key:"4",
        id:"4",
        title:"Gaseosa Schweppes", 
        price:"$ 290", 
        detail:"2250ml",
        image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/476/675/products/sheppes-pomelo-1-51-fe0a81b828cda804c216097128626175-640-0.jpg",
        stock: 9,
        category: "individual",
    },
    {
        key:"5",
        id:"5",
        title:"Pack Gaseosa Pepsi", 
        price:"$ 1200", 
        detail:"473ml",
        image:"https://puntochopp.com/wp-content/uploads/2020/05/pepsi-black-lata-354-cc-pack-x6-unidades-D_NQ_NP_651605-MLU29227749364_012019-F.jpg",
        stock: 9,
        category: "porPack",
    },
    {
        key:"6",
        id:"6",
        title:"Pack Gaseosa Schweppes", 
        price:"$ 1000", 
        detail:"473ml",
        image:"https://http2.mlstatic.com/D_NQ_NP_881641-MLA43873550674_102020-O.jpg",
        stock: 6,
        category: "porPack",
    },
    {
        key:"7",
        id:"7",
        title:"Pack Gaseosa Mirinda", 
        price:"$ 900", 
        detail:"473ml",
        image:"https://http2.mlstatic.com/D_NQ_NP_745327-MLA49005135367_022022-O.jpg",
        stock: 3,
        category: "porPack",
    },
    {
        key:"8",
        id:"8",
        title:"Pack Gaseosa 7up", 
        price:"$ 1500", 
        detail:"500ml",
        image:"https://http2.mlstatic.com/D_NQ_NP_640280-MLA44961105188_022021-O.jpg",
        stock: 10,
        category: "porPack",
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

export function getDataFilter(category){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("category: ",category)
            let itemFilter = data.filter((item) => {
                return item.category === category;
            });
            if (itemFilter) resolve(itemFilter)
            else reject(new Error("no hay filtros para la selección"))
        },2000);
    });
}

export function getSingleData(itemId){
    console.log(itemId)
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            let itemFind = data.find((item) => {
                return item.id === itemId;
            })
            if (itemFind) resolve(itemFind)
            else reject(new Error("Item no encontrado"))
        },2000)
    });
}
