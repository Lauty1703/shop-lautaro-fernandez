

import { useEffect, useState } from "react"
import products from "./products"
import FechData from "./FechData"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = ({ saludo }) => {


    const [data, setData] = useState({});
    const {id} =useParams();

    useEffect(() => {
        FechData(2000, products.find(item=>item.id === parseInt(id)) )
            .then(data => setData(data))
    }, [id])

    return <>

        <div className="container"><ItemDetail producto={data} /></div>
        <h1>{saludo}</h1>


    </>
}
export default ItemDetailContainer;