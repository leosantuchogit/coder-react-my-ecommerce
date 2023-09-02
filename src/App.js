

import "./styles.css";

// Paginas
import Home from "./pages/HomePage";
import StorePage from "./pages/StorePage";
import Entrega from "./pages/DeliveryPage";
import Contacto from "./pages/ContactPage";
import Ayuda from "./pages/HelpPage";
import Error from "./pages/ErrorPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderResultPage from "./pages/OrderResultPage";
import Layout from "./pages/Layout";

import { CartProvider } from "./components/Cart/Context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { db } from "./services/firebase/firebase";
import { getDocs, collection, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";


import ProductDetailContainer from "./components/Products/ProductDetailContainer/ProductDetailContainer"
import Auth from "./components/Auth/Auth";


function App() {

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

    console.log("ENV:", process.env.REACT_APP_authDomain);

    /* EJEMPLO: ABM EN FIREBASE
    
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
                        <Route path="tienda" element={<StorePage/>}/>
                        <Route path="/category/:categoryId" element={<StorePage/>}/>
                        <Route path="/busqueda/:input" element={<StorePage/>}/>
                        <Route path="/producto/:productoId" element={<ProductDetailContainer/>}/>
                        <Route path="/cart" element={<CartPage/>}/>
                        <Route path="/checkout" element={<CheckoutPage/>}/>
                        <Route path="/orderresult" element={<OrderResultPage />}/>
                        <Route path="entrega" element={<Entrega/>}/>
                        <Route path="contacto" element={<Contacto/>}/>
                        <Route path="ayuda" element={<Ayuda/>}/>
                        <Route path="*" element={<Error/>}/>
                    </Route>          
                </Routes>
            </CartProvider>
        </BrowserRouter>
        
        
    );


}


export default App;