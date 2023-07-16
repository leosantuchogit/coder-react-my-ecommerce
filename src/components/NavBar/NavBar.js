
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3" aria-label="Tenth navbar example">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Tienda</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Entregas</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <CartWidget item = {5}/>
                </div>
               
            </div>
        </nav>
    )
}

export default NavBar