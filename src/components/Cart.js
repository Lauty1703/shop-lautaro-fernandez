import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import db from './firebaseConfig'


const Cart = () => {
  const ctx = useContext(CartContext)
  const createOrder=async()=>{
    const itemsForDB = ctx.cartList.map(item => ({
      id: item.id,
      title: item.nombre,
      price: item.precio,
      quantity: item.qty
  }))
    let order={
      buyer:{
        name:"leonel messi",
        email:"pulga@gmail.com",
        phone:"11-5046-2890"
      },
      items:itemsForDB,
      date:serverTimestamp(),
      total:ctx.totalPrice() 

    }
     const newOrderRef = doc(collection(db, "orders"))
            await setDoc(newOrderRef, order);
  

            ctx.cartList.forEach(async (product) => {
              const itemRef = doc(db, "products", product.id)
              await updateDoc(itemRef, { stock: increment(-product.qty) });
      })
      ctx.clear()

      alert("Orden creada: " + newOrderRef.id)
    }

  return (
    <>

      {ctx.totalCantidad() !== 0 ?
        <>
          <div>

            <div className='container'>
              <button className='btn bg-danger text-white justify-content-end ' onClick={ctx.clear}> borrar carrito</button>
              <h3 className='fs-2  m-5 p text-center '>Pecio total ${ctx.totalPrice()}</h3>
            </div>
            {
              ctx.cartList.map(Item => (
                <div key={Item.id} className='container justify-content-center text-center '>

                  <div className='row  bg-color-cart align-items-center'>
                    <div className='col-md-3'>
                      <img variant="card-img-top " className='img-detail' src={Item.imagen} alt="imagen producto" />
                    </div>
                    <div className='col-md-6  justify-content-start" '>
                      <h2 className='p-2 fs-2 mt-3'>{Item.nombre}  </h2>
                      <p className='p-2 fs-3 '>Precio c/u ${ Item.precio}</p>
                      <p className='p-2 fs-3  '>Cantidad: x { Item.qty}</p>
                      <p className='p-2  fs-3 '>Subtotal ${Item.precio * Item.qty}</p>
                    </div>
                    <div className='col-md-3  '><button className='btn bg-danger text-white' onClick={() => ctx.removeItem(Item.id)}> Delete </button> </div>
                  </div>
                 

                </div>))



            }
          </div>
           <div className='text-center'>
                  <button className='btn bg-dark text-white mt-5' onClick={createOrder}> ordenar compra </button> 

                 
                  </div>
        </>
        :
        <div>  <h2 className='text-center justify-content-center'>No hay productos</h2><Link className=" btn nav-link bg-color text-white bg-color-btn-cart " to={"/"}>ir al menu de productos</Link></div>}
    </>
  )
}

export default Cart