import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemsListContainer";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart";
import CarContextProvider from "./components/CartContext";

const App = () => {
  return (
    <CarContextProvider>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={< ItemListContainer  />}></Route>
        <Route  path="/categoryId/:id" element={< ItemListContainer  />}></Route>
        <Route  path="/item/:id" element ={<ItemDetailContainer />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
      </Routes>
    </BrowserRouter>
    </CarContextProvider>
   
  );
}

export default App;