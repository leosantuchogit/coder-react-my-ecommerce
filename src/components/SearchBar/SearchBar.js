import { useState, userState } from "react";

import { Link, NavLink } from "react-router-dom";

const SearchBar = ( { enSubmit }) => {

    const [term, setTerm] = useState("");

    function handleOnSubmitOnClick(e) {
        
        e.preventDefault(); // para que no se recargue la pagina

        enSubmit (term); // esto es un callback, le paso la variable de estado
    }

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    return (
       
        <form onSubmit={ handleOnSubmitOnClick }>
            <div className="input-group">
                <input type="text" value={ term } onChange={ handleChange } className="form-control" placeholder="Buscar en la tienda..." aria-label="Buscar en la tienda..." aria-describedby="button-addon2" />
               
                <button onClick={ handleOnSubmitOnClick } className="btn btn-secondary" type="button">
                    <i class="bi bi-search"></i>

                   

                </button>
    
            </div>
        </form>
    

    )
}

export default SearchBar;