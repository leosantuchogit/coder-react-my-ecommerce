

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


import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";


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


    // Ejemplo firebase

    const [productosList, setProductosList] = useState([]); 
    const productosCollectionRef = collection(db, "productos");

    useEffect(() => {
        const getProductosList = async ()=> {
              const data = await getDocs(productosCollectionRef);
              const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
              console.log(filteredData);
              setProductosList(filteredData);
        }
        getProductosList()
    }, [])

    // rederizo la lista de elementos 
    return (
        <div>
            {productosList.map((item)=>(
            <div key={ item.id }>
                <h2>{ item.nombre }</h2>
                <p>{ item.precio }</p>
                <p>{ item.stock }</p>
            </div>
            ))}
        </div>
    )
   


/*

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
                        <Route path="/cart" element={<CartPage/>}/>
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

    */

}


export default App;