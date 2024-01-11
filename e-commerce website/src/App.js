import './App.css';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import ProductList from './components/e-commerce/productList/ProductList';
import CreateNote from "./components/notes/CreateNote";
import ListNotes from "./components/notes/ListNotes";
import NavBar from './components/e-commerce/navbar/NavBar'
function App() {
  return (
    <div className="App">
      {/* <Child1></Child1>
      <Child2></Child2> */}
      {/* <CreateNote />
      <ListNotes /> */}
      <NavBar />
      <ProductList />
    </div>
  );
}

export default App;
