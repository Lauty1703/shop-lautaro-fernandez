import "./App.css";
//import ItemListContainer from "./components/ItemsListContainer";
import Navbar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer"

const  App=()=> {
  return (
    <div>
    <Navbar />
   {/* < ItemListContainer/>*/}
    <ItemDetailContainer />
    </div>
    );
}

export default App;