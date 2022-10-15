

import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
 import {getFirestore,doc,getDoc} from 'firebase/firestore'

 const ItemDetailContainer = () => {

    const [dato,setDato]=useState({})
    //obtener el id que viene por URL
    const {id}=useParams()

    useEffect(() => {
      const querydb=getFirestore();
      const queryDoc=doc(querydb,'products',id)
      getDoc(queryDoc)
      .then(res=>setDato({id:res.id,...res.data()}))
    
      
    },[id])
    
  return (
    <div>
        <ItemDetail data={dato}/>
    </div>
  )
}
export default ItemDetailContainer