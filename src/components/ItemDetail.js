import  { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import ItemCount from "./ItemCount"
import Cart from './Cart';
import { CartContext } from './CartContext';


function ItemDetail({ producto }) {

    const [contador,setIContador]=useState(0);
    const ctx=useContext(CartContext)

    const onAdd=(qty)=>{
        alert(`you have selected ${qty} items.`)
        setIContador(qty)
        ctx.addItem(producto,qty)
        
    }

    return (
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-3 text-center justify-content-center ">
                    <img
                        src={producto.imagen}
                        alt="Trendy Pants and Shoes"
                        class="img-fluid rounded-start"
                    />
                </div>
                <div class="col-md-5">
                    <div class="card-body">
                        <h5 class="card-title fs-2">{producto.nombre}</h5>
                        <p class="card-text fs-4">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to

                        </p>
                        <p class="card-text">
                            <small class="text-muted fs-2">${producto.precio}</small>
                        </p>
                    </div>
                </div>
                
            </div>
            <div class="col-md-12 ">
                    {contador === 0 ?
                    <ItemCount initial={contador} stock={5} onAdd={onAdd} ></ItemCount>:
                    <Link to="/cart" element={<Cart/>}>
                          <button type="button" className="btn btn-primary">Finalizar compra</button>
                    </Link>

                    }
                </div>
        </div>

    )
}

export default ItemDetail