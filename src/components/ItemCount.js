import { useState } from "react"
const ItemCount = ({ initial, stock,onAdd}) => {

    const [contador, setContador] = useState(initial);

    const sumar = () => {

        if (contador < stock) {
            setContador(contador + 1)
        }
    }
    const restar = () => {
        if (contador > initial) {
            setContador(contador - 1)
        }
    }

   
    return <><div className="text-center justify-content-center bg-light  btn-card-container">
        <div className="">
            <button className="btn " onClick={() => restar()}>-</button>
            <spam className="fs-4">{contador}</spam>
            <button className="btn" onClick={() => sumar()}>+</button>

        </div>
       
        <div className="container">  
            { stock
                ? <button className="btn-carrito" onClick={() => onAdd(contador)}>Add to Cart</button>
                : <button className="btn-carrito" disabled>Add to Cart</button>
            }</div>
    </div>
    </>
}
export default ItemCount;