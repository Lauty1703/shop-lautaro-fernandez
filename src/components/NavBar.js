import CartWidget from "./CartWidget"
import { Link } from "react-router-dom";
const Navbar =()=> {
    return <><nav className="navbar navbar-expand-lg  navbar-light bg-light sticky-top shadow p-3 mb-5 bg-body rounded" id="botonera">
      <div className="container">
      <Link className="navbar-brand title-icono" to="/">ICE<span className="title-shop"> SHOP</span></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " id="lista">
            <li className="nav-item">
            <Link className="nav-link " to="/categoria/2">OFERTAS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/categoria/3">PRODUCTOS</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link " to="/categoria/1">TOP</Link>
            </li>
          </ul>
          <div> <Link className="nav-link " to="/cart"><CartWidget /></Link></div>

        </div>
      </div>
    </nav>
   
    
    </>
}
export default Navbar;