import React from 'react'
import ItemCount from "./ItemCount"

function ItemDetail({ producto }) {
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
                <div class="col-md-4 mt-5">
                    <ItemCount initial={1} stock={5} />
                    </div>
            </div>
        </div>

    )
}

export default ItemDetail