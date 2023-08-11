

import "./styles.css";

// Paginas
import Home from "./pages/Home";
import Tienda from "./pages/Tienda";
import Entrega from "./pages/Entrega";
import Contacto from "./pages/Contacto";
import Ayuda from "./pages/Ayuda";
import Error from "./pages/Error";
import CartPage from "./pages/CartPage";

import ContextHijo1 from "./components/ContextExamples/ContextHijo1"
import ContextHijo2 from "./components/ContextExamples/ContextHijo2"
import ContextHijo3 from "./components/ContextExamples/ContextHijo3"
import { DataProvider  } from "./context/DataContext";

import Acordeon from "./components/Acordeon/Acordeon";

import { CartProvider } from "./components/Cart/Context/CartContext";


import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";

import ProductDetailContainer from "./components/Products/ProductDetailContainer/ProductDetailContainer"

function App() {


    // // ejemplo de acordion (clase 12)
    // const items = [
    //     {
    //         id: 1,
    //         label:"Frases de Homer", 
    //         content:"Estupido y sensual Flanders"
    //     }, 
    //    {
    //     id:2,
    //     label:"Frases de Milhouse",
    //     content:"¿Te acuerdas de Alf? Volvio! En forma de fichas!"
    //    }, 
    //    {
    //     id:3,
    //     label:"Frases de Bart",
    //     content:"Yo no fui!"
    //    } 
    // ]

    // return <Acordeon items={items}/>


    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/> 
                        <Route path="tienda" element={<Tienda/>}/>
                        <Route path="/category/:categoryId" element={<Tienda/>}/>
                        <Route path="/produtcto/:name" element={<Tienda/>}/>
                        <Route path="/producto/:productoId" element={<ProductDetailContainer/>}/>
                        <Route path="cart" element={<CartPage/>}/>
                        <Route path="entrega" element={<Entrega/>}/>
                        <Route path="contacto" element={<Contacto/>}/>
                        <Route path="ayuda" element={<Ayuda/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>          
                </Routes>
            </CartProvider>
        </BrowserRouter>
        
        // <DataProvider>
        //     <div>
        //         <ContextHijo1 />
        //         <ContextHijo2 />   
        //         <ContextHijo3 />   
        //     </div>
        // </DataProvider>
        
    );


}


export default App;