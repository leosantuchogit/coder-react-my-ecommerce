
import { getProductsById } from "../../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductDetail from "../ProductDetail/ProductDetail";

const ProductDetailContainer = () => {
    
    const {productoId} = useParams()
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        getProductsById(productoId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error("Error: ", error);
            })
    }, [productoId])

    return (
        <ProductDetail  id={productos.id} 
                        titulo={productos.title}
                        descripcion={productos.description}
                        precio={productos.price}
                        img={productos.image}
                        stock={productos.stock}
                        discount={productos.discount}
        />
        
    )
}

export default ProductDetailContainer