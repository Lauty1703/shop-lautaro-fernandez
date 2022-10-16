import { useContext } from "react";
import { BsCart } from "react-icons/bs";
import { CartContext } from "./CartContext";
const CartWidget = () => {
    const ctx = useContext(CartContext)
    return (
    <>

        {ctx.totalCantidad() === 0 ?
            <>
                <div className="icono-carrito text-center ps-5 aling-center" >

                    <BsCart />
                </div>

            </>
            :
            <div className="icono-carrito text-center ps-5 aling-center"> <BsCart />{ctx.totalCantidad()}  </div>}
    </>
    )

}
export default CartWidget;
