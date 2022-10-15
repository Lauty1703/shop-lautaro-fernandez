import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({id,title,imagen,precio,precioOld,stock}) => {
  return (
    <section className="container col-sm 12 col-md 2  col-lg 3  mb-5" id={id}>
    <div className=" wow bounceInUp">
      <div className="">
        <div className="container d-flex justify-content-around text-center" id="productos">
          <div className="card" id="card">
            <img className="img-carousel" src={imagen} alt="imagen de helados en cono" />
            <div className="card-body">
              <h3 className="card-title mb-5 mt-2">{title}</h3>
              <div className='pt-3'> <p className="card-text fs-3 "> stock {stock}</p><p className="card-text fs-3 precio-old"> ${precioOld}</p>
              <p className="card-text fs-3 "> ${precio}</p></div>
              
              <Link className="nav-link btn bg-color" to={`/item/${id}`}>Ver producto</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Item