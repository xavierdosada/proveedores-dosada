import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer id="products" greeting="Productos"/>
      <ItemCount initial={1} stock={10}/>
    </div>
  );
}

export default App;
