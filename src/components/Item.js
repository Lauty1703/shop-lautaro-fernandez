import React from 'react'
import { Link } from 'react-router-dom'
const Item = ({id,title,imagen,precio}) => {
  return (
    <section className="container col-sm 12 col-md 2  col-lg 3  mb-5" id={id}>
    <div className=" wow bounceInUp">
      <div className="">
        <div className="container d-flex justify-content-around text-center" id="productos">
          <div className="card" id="card">
            <img className="img-carousel" src={imagen} alt="imagen de helados en cono" />
            <div className="card-body">
              <h3 className="card-title">{title}</h3>
              <p className="card-text fs-3"> ${precio}</p>
              <button className='btn bg-primary text-white w-75'>Comprar</button>
              <Link className="nav-link " to={`/item/${id}`}>DETAILLE</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}

export default Item