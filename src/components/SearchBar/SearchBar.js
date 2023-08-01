import { useState, userState } from "react";



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
        <div className="bg-dark p-4">
            <form onSubmit={ handleOnSubmitOnClick }>
                <div className="input-group mb-3">
                    <input type="text" value={ term } onChange={ handleChange } className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button onClick={ handleOnSubmitOnClick } className="btn btn-secondary" type="button">Button</button>
                </div>
            </form>
        </div>

    )
}

export default SearchBar;