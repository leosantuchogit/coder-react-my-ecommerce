import { useState, userState } from "react";
import { Link } from "react-router-dom";

const SearchBar = () => {

    const [textSearch, setTextSearch] = useState("");

    const handleChange = (e) => {
        setTextSearch(e.target.value);
    }

    const handleKeyUp = (e) => {
        if (e.key === "Enter") {
            console.log("presione enter", e.target.value)
            setTextSearch(e.target.value)
        }
    }

    return (
       
            <div className="input-group">
                <input  type="text" 
                        value={ textSearch } 
                        onChange={ handleChange } 
                        onKeyUp={ handleKeyUp }
                        className="form-control" 
                        placeholder="Buscar en la tienda..." 
                        aria-label="Buscar en la tienda..." 
                        aria-describedby="button-addon2"
                 
                />
        
                <Link to={"/busqueda/" + textSearch} className="btn btn-secondary" >
                    <i class="bi bi-search"></i>
                </Link>
    
            </div>
                 
    )
}

export default SearchBar;