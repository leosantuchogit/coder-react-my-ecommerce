
import CartWidget from "../Cart/CartButtonCounter/CartButtonCounter";
import LoginButton from "../LoginButton/LoginButton";
import SearchBar from "../SearchBar/SearchBar";

import searchImages from "../../apis/unsplash";

import "./css/navbar.css";

import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {    
    
    const [productos, setProductos] = useState([]);
    const handleSubmit = async (term) => {  // = async function handleSubmit (term)
        
        let resultado = await searchImages(term);

        console.log(term);
        
        setProductos(resultado);
        
        console.log(resultado);
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3" aria-label="Tenth navbar example">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <i className="bi bi-slack me-2 fs-3" role="img" aria-label="Bootstrap"></i>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto px-3 mb-2 justify-content-center mb-md-0">
                <li><Link className="nav-link px-2 text-white" to="/">Home</Link></li>  

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tienda
                    </a>
                    <ul className="dropdown-menu">
                        <NavLink to={`/category/Bolsones`} className="link-no-decoration" >
                            <li><a className="dropdown-item">Bolsones</a></li>
                        </NavLink>
                        <NavLink to={`/category/Frutas`} className="link-no-decoration">
                            <li><a className="dropdown-item">Frutas</a></li>
                        </NavLink>
                        <NavLink to={`/category/Electronics`} className="link-no-decoration">
                            <li><a className="dropdown-item">Electronics</a></li>
                        </NavLink>
                        <NavLink to={`/category/Women's clothing`} className="link-no-decoration">
                            <li><a className="dropdown-item">Women's clothing</a></li>
                        </NavLink>
                    </ul>
                </li>
                
                <li><Link className="nav-link px-2 text-white" to="/contacto">Contacto</Link></li>
                <li><Link className="nav-link px-2 text-white" to="/ayuda">Ayuda</Link></li> 
            </ul>                    
    
            <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                <SearchBar enSubmit = { handleSubmit } />
            </div>
            
            <div>
                <CartWidget item = {5}/>
            </div>

            <div> 
                <LoginButton />
            </div>
        </nav>
  
    )
}

export default NavBar