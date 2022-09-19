import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemListContainer from "./components/ItemsListContainer";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer"

const App = () => {
  return (

    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route  path="/" element={< ItemListContainer  />}></Route>
        <Route  path="/categoryId/:id" element={< ItemListContainer  />}></Route>
        <Route  path="/item/:id" element ={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;