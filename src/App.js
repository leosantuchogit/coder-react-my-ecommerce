

import "./styles.css";

// Paginas
import Home from "./pages/Home";
import TiendaPage from "./pages/TiendaPage";
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


import { db } from "./services/firebase/firebase";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

import Auth from "./components/Auth/Auth";


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

    const [newProductNombre, setNewProductNombre] = useState("");
    const [newProductPrecio, setNewProductPrecio] = useState("");
    const [newProductStock, setNewProductStock] = useState("");
    const [updateProductNombre, setUpdateProductNombre] = useState("");
    const [udapteProductPrecio, setUpdateProductPrecio] = useState("");
    const [updateProductStock, setUpdateProductStock] = useState("");


    const getProductosList = async ()=> {
        const data = await getDocs(productosCollectionRef);
        const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        console.log(filteredData);
        setProductosList(filteredData);
  }

    useEffect(() => {
        
        getProductosList()
    }, [])


    const onSubmitNewProduct = async () => {
        await addDoc(productosCollectionRef, {nombre:newProductNombre, precio:newProductPrecio, stock:newProductStock})
        getProductosList();
    }

    const onSubmitDeleteProduct = async (id) => {
        const productDoc = doc(db, "productos", id);
        await deleteDoc(productDoc);
        getProductosList();
    }

    const OnSubmitUpdateProduct = async(id) => {
        const productDoc = doc(db, "productos", id);
        await updateDoc(productDoc, {nombre:updateProductNombre});
        getProductosList();
    }

    /*
    
    // rederizo la lista de elementos 
    return (
        <div>
            <div>
                <Auth />
            </div>
            <div>
                <h2>Nuevo producto</h2>
                <input placeholder="Nombre" onChange={(e)=>setNewProductNombre(e.target.value)}/>
                <input placeholder="Precio" onChange={(e)=>setNewProductPrecio(Number(e.target.value))}/>
                <input placeholder="Stock"  onChange={(e)=>setNewProductStock(Number(e.target.value))}/>
                <button onClick={ onSubmitNewProduct }>Enviar</button>
            </div>

            <div>
                {productosList.map((item)=>(
                <div key={ item.id }>
                    <h2>{ item.title }</h2>
                    <p>{ item.price }</p>
                    <p>{ item.stock }</p>
                    <button onClick={()=>onSubmitDeleteProduct(item.id) }>Borrar</button>
               
                    <input placeholder="Modificar" onChange={(e)=>setUpdateProductNombre(e.target.value)} />
                    <button onClick={()=>OnSubmitUpdateProduct(item.id)}>Update</button>
                </div>

                ))}
            </div>


        </div>
    )
   
*/



    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/> 
                        <Route path="tienda" element={<TiendaPage/>}/>
                        <Route path="/category/:categoryId" element={<TiendaPage/>}/>
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

    

}


export default App;