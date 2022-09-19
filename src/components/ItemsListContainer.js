import { useEffect,useState  } from "react"
import products from "./products"
import FechData from "./FechData"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
const ItemListContainer = ({ saludo }) => {

    
    const [data,setData]=useState([]);
    const {id} = useParams()

   useEffect(()=>{
        if( id){
        FechData(2000,products.filter(item=>item.categoryId === parseInt(id)) )
        .then(data=> setData(data))
        .catch(err=>console.log(err))
        }else{
            FechData(2000,products)
        .then(data=> setData(data))
        .catch(err=>console.log(err))
        }
    },[id])

    return <>

        <div className="container"><ItemList data={data}/></div> 
         <h1>{saludo}</h1>

    </>
}
export default ItemListContainer;