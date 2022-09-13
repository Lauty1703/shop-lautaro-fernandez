import CartWidget from "./CartWidget"
const Navbar =()=> {
    return <><nav className="navbar navbar-expand-lg  navbar-light bg-light sticky-top shadow p-3 mb-5 bg-body rounded" id="botonera">
      <div className="container">
        <a className="navbar-brand title-icono" href="index.html">ICE <span className="title-shop"> SHOP</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " id="lista">
            <li className="nav-item">
              <a className="nav-link " href="index.html">CATALOGO 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="index.html">CATALOGO 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="index.html">CATALOGO 3</a>
            </li>
          </ul>
          <div><CartWidget /></div>

        </div>
      </div>
    </nav>
   
    
    </>
}
export default Navbar;