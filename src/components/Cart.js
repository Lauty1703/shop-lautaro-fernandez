import { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
  const ctx = useContext(CartContext)



  return (
    <>
    <div className='container'>
      <button className='btn bg-danger text-white justify-content-end ' onClick={ctx.clear}> borrar carrito</button>
      </div>
      {
        ctx.cartList.map(Item => (
          <div className='container justify-content-center text-center  '>
            
            <div className='row  bg-light align-items-center'>
              <div className='col-md-3'>
                <img variant="card-img-top" src={Item.imagen} alt="imagen producto" />
              </div>
              <div className='col-md-6 '>
                <h2 className='text-dark'>{Item.nombre}</h2>
                <p className='fs-2  '>${Item.precio}</p>
              </div>
              <div className='col-md-3  '><button className='btn bg-primary text-white' onClick={()=>ctx.removeItem(Item.id)}> eliminar </button> </div>
            </div>

          </div>))
      }

    </>
    // ) <li > {Item.imagen}, {Item.precio},  <button className='btn bg-dark' onClick={()=>ctx.removeItem(Item.id)}> borrar elemento </button> 
    //     </li>
  )
}

export default Cart