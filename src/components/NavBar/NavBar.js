
import CartWidget from "../CartWidget/CartWidget";

import Login from "../LoginButton/LoginButton";
import LoginButton from "../LoginButton/LoginButton";
import SearchBar from "../SearchBar/SearchBar";
import ProductList from "../ProductList/ProductList";

import searchImages from "../../apis/unsplash";
import { useState } from "react";


import { Link } from "react-router-dom";

const NavBar = () => {

    
    
    const [productos, setProductos] = useState([]);
    const handleSubmit = async (term) => {  // = async function handleSubmit (term)
        
        let resultado = await searchImages(term);
        
        setProductos(resultado);
        
        console.log(resultado);
    }

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3" aria-label="Tenth navbar example">
            <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                <i className="bi bi-slack me-2 fs-3" role="img" aria-label="Bootstrap"></i>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><Link className="nav-link px-2 text-white" to="/">Home</Link></li>  
                <li><Link className="nav-link px-2 text-white" to="/tienda">Tienda</Link></li>
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


    //   <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        //   <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        //     <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        //   </a>

        //   <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        //     <li><a href="#" class="nav-link px-2 text-secondary">Home</a></li>
        //     <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
        //     <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
        //     <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
        //     <li><a href="#" class="nav-link px-2 text-white">About</a></li>
        //   </ul>

        //   <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        //     <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
        //   </form>

        //   <div class="text-end">
        //     <button type="button" class="btn btn-outline-light me-2">Login</button>
        //     <button type="button" class="btn btn-warning">Sign-up</button>
        //   </div>
    // </div>
  
    )
}

export default NavBar