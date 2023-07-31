

import "./styles.css";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import searchImages from "./apis/unsplash";
import { useState } from "react";




function App() {

    const [productos, setProductos] = useState([]);

    // async function handleSubmit (term)
    const handleSubmit = async (term) => {
        let resultado = await searchImages(term);
        setProductos(resultado);
        console.log(resultado);
        console.log(productos);

    }

    
    return (
        <div>

            <NavBar />    
            <SearchBar enSubmit = { handleSubmit } />
            <ItemListContainer productos={ productos }/>
            <Footer />
        </div>

    );
}


export default App;