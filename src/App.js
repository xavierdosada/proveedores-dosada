import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from './components/context/CartContext';
import CartView from './components/CartView/CartView';

function App() {
  return (
    <CartContextProvider>
      <div className="App">
        <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer id="products" greeting="Productos"/>}/>
          <Route path="/categoria/:category" element={<ItemListContainer id="products" greeting="Productos"/>}></Route>
          <Route path="/details/:itemid" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<CartView/>} />
          <Route path="*" element={<h1>404: No se encontro la Página</h1>} />
        </Routes>
        </BrowserRouter>
      </div>
    </CartContextProvider>
  );
}

export default App;
