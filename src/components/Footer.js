import React from 'react'

const Footer = () => {
  return (<>
    <div><footer className="container-fluid pt-5 ">
    <div className="row p-5 bg-footer text-white ">
      <div className="col-xs-12 col-md-6 col-lg-3">
       <h3 className="title-footer "><img className="logo" src="https://i.ibb.co/CtSG5H7/icon.png" alt="logo de heladeria iceboom"/>Ice Boom</h3>
       <p className="text-descripcion-footer">nos especializamos en brindar  la mejor calidad de helados  del pais</p>
      </div>
      <div className="col-xs-12 col-md-6 col-lg-3">
        <h5 className="subtitulo-footer">Helados</h5>
        <div className="mb-2">
          <a href="." className="text-decoration-none  color-a text-a">cono de helados</a>
        </div>
         <div className="mb-2">
          <a href="." className="text-decoration-none  color-a text-secondary text-a">helados por kilo</a>
        </div>
         <div className="mb-2">
          <a href="." className="text-decoration-none color-a text-a">helados por valde </a>
        </div>
         <div className="mb-2">
          <a href="." className="text-decoration-none color-a  text-a">helados de palito</a>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 col-lg-3">
        <h5 className="subtitulo-footer">Contactos</h5>
          <div className="mb-2">
          <a href="." className="text-decoration-none color-a  text-a">twiter</a>
        </div>
          <div className="mb-2">
          <a href="https://www.facebook.com/" className="text-decoration-none color-a  text-a">facebook</a>
        </div>
          <div className="mb-2">
          <a href="." className="text-decoration-none color-a  text-a">instagram</a>
        </div>
      </div>
      <div className="col-xs-12 col-md-6 col-lg-3">
        <h5 className="subtitulo-footer">links</h5>
          <div className="mb-2">
          <a href="." className="text-decoration-none color-a  text-a">terminos y condiciones</a>
        </div>
          <div className="mb-2">
          <a href="." className="text-decoration-none color-a  text-a">politica y privacidad</a>
        </div>
      </div>
      <div className="col-xs-12 pt-5">
        <p className="text-white text-center text-coyright">
         copyright - all rights reserver © 2022
        </p>
      </div>
    </div>
  </footer></div>
  </>
  )
}

export default Footer