// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyACd9hSrzXn1N04tEsVl_pobBeq6sXoVYI",
  authDomain: "mayoristock.firebaseapp.com",
  projectId: "mayoristock",
  storageBucket: "mayoristock.appspot.com",
  messagingSenderId: "1003874962543",
  appId: "1:1003874962543:web:afa84a44b4c38d3e5fd19a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getData(){
    const collectionRef = collection(firestore, "productos");
    let snapShotDB = await getDocs(collectionRef);
    let dataDocs = snapShotDB.docs.map ((documento) => {
      let dataDocFormat = {... documento.data(), id: documento.id}
      return dataDocFormat
    });
    return dataDocs;
}

export async function getSingleData(idParams){
  const docRef = doc(firestore, "productos", idParams);
  let docSnapShotDB = await getDoc(docRef);
  return { ...docSnapShotDB.data(), id: docSnapShotDB.id };

}

export async function getDataFilter(catParams){
  const collectionRef = collection(firestore, "productos");
  const qCategory = query(collectionRef, where("category", "==", catParams))

  const snapShot = await getDocs(qCategory)
  let dataCategory = snapShot.docs.map((documento) => {
    let dataCategoryFormat = { ...documento.data(), id: documento.id}
    return dataCategoryFormat;
  })
  return dataCategory;
}

export async function newbuyOrder(buyOrderData){
  const collectionRef = collection(firestore, "orders");
  let respuesta = await addDoc(collectionRef, buyOrderData);
  return(respuesta.id)
}

export async function exportDataToFireStore(){
  const data = [
    { 
        key:"1",
        id:"1",
        title:"Gaseosa Pepsi", 
        price:"190", 
        detail:"500ml, 0 azucares",
        image:"https://images.rappi.com.ar/products/d38a9b4a-a15b-48aa-b726-3947b08cb827.png?d=200x200&e=webp",
        stock: 6,
        category: "individual",
    },
    {   
        key:"2",
        id:"2",
        title:"Gaseosa 7up", 
        price:"180", 
        detail:"500ml",
        image:"https://cdn.shopify.com/s/files/1/0254/2947/5433/products/gaseosa-7up-sin-azucar-pet-1500-siempreencasa_1_500x.png?v=1643387499?nocache=0.11452011740766466",
        stock: 7,
        category: "individual",
    },
    {    
        key:"3", 
        id:"3",
        title:"Gaseosa Mirinda", 
        price:"220", 
        detail:"1500ml", 
        image:"https://www.grupoelnene.com.ar/7355-large_default/mirinda-naranja-15lt.jpg",
        stock: 8,
        category: "individual",
    },
    {
        key:"4",
        id:"4",
        title:"Gaseosa Schweppes", 
        price:"290", 
        detail:"2250ml",
        image:"http://d3ugyf2ht6aenh.cloudfront.net/stores/001/476/675/products/sheppes-pomelo-1-51-fe0a81b828cda804c216097128626175-640-0.jpg",
        stock: 9,
        category: "individual",
    },
    {
        key:"5",
        id:"5",
        title:"Pack Gaseosa Pepsi", 
        price:"1200", 
        detail:"473ml",
        image:"https://puntochopp.com/wp-content/uploads/2020/05/pepsi-black-lata-354-cc-pack-x6-unidades-D_NQ_NP_651605-MLU29227749364_012019-F.jpg",
        stock: 9,
        category: "porPack",
    },
    {
        key:"6",
        id:"6",
        title:"Pack Gaseosa Schweppes", 
        price:"1000", 
        detail:"473ml",
        image:"https://http2.mlstatic.com/D_NQ_NP_881641-MLA43873550674_102020-O.jpg",
        stock: 6,
        category: "porPack",
    },
    {
        key:"7",
        id:"7",
        title:"Pack Gaseosa Mirinda", 
        price:"900", 
        detail:"473ml",
        image:"https://http2.mlstatic.com/D_NQ_NP_745327-MLA49005135367_022022-O.jpg",
        stock: 3,
        category: "porPack",
    },
    {
        key:"8",
        id:"8",
        title:"Pack Gaseosa 7up", 
        price:"1500", 
        detail:"500ml",
        image:"https://http2.mlstatic.com/D_NQ_NP_640280-MLA44961105188_022021-O.jpg",
        stock: 10,
        category: "porPack",
    },
];

  const collectionRef = collection(firestore, "productos");

  for (let singleItem of data){
    const newDoc = await addDoc(collectionRef, singleItem);
    console.log("Doc created", newDoc.id)
  }
}

export default firestore