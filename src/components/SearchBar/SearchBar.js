import { useState, userState } from "react";
import { Link } from "react-router-dom";

const SearchBar = ( { enSubmit }) => {

    const [textSearch, setTextSearch] = useState("");

    const handleChange = (e) => {
        setTextSearch(e.target.value);
    }

    return (
       
            <div className="input-group">
                <input type="text" value={ textSearch } onChange={ handleChange } className="form-control" placeholder="Buscar en la tienda..." aria-label="Buscar en la tienda..." aria-describedby="button-addon2" />
        
                <Link to={"/busqueda/" + textSearch} className="btn btn-secondary" >
                    <i class="bi bi-search"></i>
                </Link>
    
            </div>
                 
    )
}

export default SearchBar;