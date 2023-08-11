
import { getProducts, getProductsByCategory } from  "../../../data/asyncMock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Util/Loader/Loader";

import ProductList from "../ProductList/ProductList";

function ProductListContainer() {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const asynFunction = categoryId ? getProductsByCategory : getProducts
        
        setLoading(true)

        asynFunction(categoryId)
            .then(response => {
                setProductos(response)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
        
    }, [categoryId])

    return (
        <div> 
            {
                loading ? (
                    <Loader />
                ) : (
                    <ProductList productos={productos} />
                )
            }
        </div>
    )
}

export default ProductListContainer;
