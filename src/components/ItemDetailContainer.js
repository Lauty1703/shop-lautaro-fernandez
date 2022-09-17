

import { useEffect, useState } from "react"
import products from "./products"
import FechData from "./FechData"
import ItemDetail from "./ItemDetail"
const ItemDetailContainer = ({ saludo }) => {


    const [data, setData] = useState({});

    useEffect(() => {
        FechData(2000, products[2])
            .then(data => setData(data))
    }, [])

    return <>

        <div className="container"><ItemDetail producto={data} /></div>
        <h1>{saludo}</h1>


    </>
}
export default ItemDetailContainer;