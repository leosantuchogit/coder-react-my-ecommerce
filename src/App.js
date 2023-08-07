

import "./styles.css";

import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Entrega from "./pages/Entrega";
import Contacto from "./pages/Contacto";
import Ayuda from "./pages/Ayuda";
import Error from "./pages/Error";

import ProductDetailContainer from "./components/Products/ProductDetailContainer/ProductDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

function App() {

    
    return (
        <BrowserRouter>
           
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/> 
                    <Route path="tienda" element={<Tienda/>}/>
                    <Route path="/category/:categoryId" element={<Tienda/>}/>
                    <Route path="/producto/:productoId" element={<ProductDetailContainer/>}/>
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