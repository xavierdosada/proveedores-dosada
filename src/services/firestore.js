// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

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

export default firestore