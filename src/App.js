import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemsListContainer";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer"
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";

const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path="/" element={<ItemListContainer />}/>
        <Route  path="/categoria/:categoria" element={<ItemListContainer/>}/>
        <Route  path="/Item/:id" element={<ItemDetailContainer/>}/>
        <Route  path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
   
  );
}

export default App;