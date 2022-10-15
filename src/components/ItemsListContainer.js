import { useEffect,useState  } from "react"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {getFirestore,collection,getDocs,where,query} from 'firebase/firestore'
const ItemListContainer = () => {

    
    const [data,setData]=useState([]);
    const {categoria} = useParams()

    
    useEffect(() =>{
 
       
        const querydb = getFirestore();
  
        const queryCollection = collection(querydb, 'products');
  
        if (categoria) {
          const queryFilter = query(queryCollection, where('categoria', '==', categoria));
        
          getDocs(queryFilter)
            .then(res => setData(res.docs.map(menu => ({ id: menu.id, ...menu.data() }))))
        
        } else {
        getDocs(queryCollection)
          .then(res => setData(res.docs.map(menu => ({ id: menu.id, ...menu.data() }))))
        } 
   
    }, [categoria]);

    return <>

        <div className="container"><ItemList data={data}/></div> 
         

    </>
}
export default ItemListContainer;