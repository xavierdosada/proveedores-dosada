import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer id="products" greeting="Productos"/>}/>
        <Route path="/categoria/:category" element={<ItemListContainer id="products" greeting="Productos"/>}></Route>
        <Route path="/details/:itemid" element={<ItemDetailContainer/>}/>
        <Route path="/cart" element={<h1>Finalizando compra</h1>} />
        <Route path="*" element={<h1>404: No se encontro la Página</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
