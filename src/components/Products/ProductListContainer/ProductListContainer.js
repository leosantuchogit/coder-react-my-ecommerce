

import { getProducts, getProductsByCategory } from  "../../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductList from "../ProductList/ProductList";

function ProductListContainer() {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])



    useEffect(() => {
        const asynFunction = categoryId ? getProductsByCategory : getProducts
       
        asynFunction(categoryId)
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])


    return (
        <div>
            <ProductList productos={productos} />
        </div>
    )
}

export default ProductListContainer;

