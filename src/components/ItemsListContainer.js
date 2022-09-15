import { useEffect,useState  } from "react"
import ItemCount from "./ItemCount"
import products from "./products"
import FechData from "./FechData"
import ItemList from "./ItemList"
const ItemListContainer = ({ saludo }) => {

    
    const [data,setData]=useState([]);

    useEffect(()=>{
        FechData(2000,products)
        .then(data=> setData(data))
        .catch(err=>console.log(err))
    },[])

    return <>

        <div className="container"><ItemList data={data}/></div> 
         <h1>{saludo}</h1>

        <ItemCount initial={1} stock={5} />
    </>
}
export default ItemListContainer;