import { useState } from "react"
const ItemCount = ({ initial, stock }) => {

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

    const agregarCarrito = () => {
        setContador(contador)
        alert(`has agregado ${contador} productos`)
    }
    return <><div className="text-center justify-content-center bg-light  btn-card-container">
        <div className="">
            <button className="btn " onClick={() => restar()}>-</button>
            <spam className="fs-4">{contador}</spam>
            <button className="btn" onClick={() => sumar()}>+</button>

        </div>
        <div>
            <button className="btn-carrito" onClick={() => agregarCarrito()}>agregar al carrito</button>
        </div>
    </div>
    </>
}
export default ItemCount;