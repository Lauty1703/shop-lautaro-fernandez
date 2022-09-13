import { useState } from "react";

const Cart = ({id, thumbnail, title, dateAdded, precio, handDelete}) => {

  const [rate,setRate]=useState(0);

  const handrate=()=>{
    setRate(rate+1)
  }
  
  
  return (


    <section className="container mb-5" id="box-cards-ofertas">
      <div className="row wow bounceInUp">
        <div className="col-sm 12 col-md 2  col-lg 3 ">
          <div className="container d-flex justify-content-around text-center" id="productos">
            <div className="card" id="card">
              <img className="img-carousel" src={thumbnail} alt="imagen de helados en cono" />
              <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{precio}</p>
                <button onClick={handrate} > start</button>{rate}
              <button onClick={()=>handDelete(id)}>borrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;