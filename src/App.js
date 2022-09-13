import "./App.css";
import ItemListContainer from "./components/ItemsListContainer";
import Navbar from "./components/NavBar";
import Carts from "./containers/Carts"

const  App=()=> {
  return (
    <div>
    <Navbar />
    < ItemListContainer/>
    < Carts />
    
    </div>
    );
}

export default App;