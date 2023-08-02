

import "./styles.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import searchImages from "./apis/unsplash";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";

import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Entrega from "./pages/Entrega";
import Contacto from "./pages/Contacto";
import Error from "./pages/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

    // const [productos, setProductos] = useState([]);

    // // = async function handleSubmit (term)
    // const handleSubmit = async (term) => {
        
    //     let resultado = await searchImages(term);
        
    //     setProductos(resultado);
        
    //     console.log(resultado);
    //     // console.log(productos);

    // }

    
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="Tienda" element={<Contacto/>}/>
                <Route path="entrega" element={<Entrega/>}/>
                <Route path="*" element={<Error/>}/>

                {/* <div>
                    <SearchBar enSubmit = { handleSubmit } />
                    <NavBar />    
                    <ProductList productos = { productos }/>
                    <Footer />
                </div> */}

                {/* <ProductList productos = { productos }/> */}


            </Routes>

            <Footer />
        </BrowserRouter>
       

    );
}


export default App;