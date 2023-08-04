import { useState, useEffect } from "react";
import { getProductos } from "../../data/dataMock"
import ProductList from "../ProductList/ProductList";


const ProductListContainer = ({ greeting }) => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProductos()
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>{ greeting }</h1>
            <ProductList productos={ productos } />
        </div>
    )
}

export default ProductListContainer;