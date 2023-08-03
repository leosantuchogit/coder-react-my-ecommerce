

import "./styles.css";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import SearchBar from "./components/SearchBar/SearchBar";
import searchImages from "./apis/unsplash";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";

import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import ProductoDetail from "./pages/ProductoDetail";
import Entrega from "./pages/Entrega";
import Contacto from "./pages/Contacto";
import Ayuda from "./pages/Ayuda";
import Error from "./pages/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

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
           
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/> 
                    <Route path="tienda" element={<Tienda/>}/>
                    <Route path="productoDetail/:productoId" element={<ProductoDetail/>}/>
                    <Route path="entrega" element={<Entrega/>}/>
                    <Route path="contacto" element={<Contacto/>}/>
                    <Route path="ayuda" element={<Ayuda/>}/>
                    <Route path="*" element={<Error/>}/>
                </Route>
            </Routes>
     
        </BrowserRouter>
       

    );
}


export default App;