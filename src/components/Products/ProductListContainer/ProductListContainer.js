
// React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// My components
import Loader from "../../Util/Loader/Loader";
import ProductList from "../ProductList/ProductList";

// Firebase
import { getDocs, collection, doc, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase/firebase";

function ProductListContainer() {

    const {categoryId} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId 
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc => {
                        const data = doc.data()
                        return {id: doc.id, ...data}
                    })
                    setProductos(productsAdapted)

                    console.log(productsAdapted);
   
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false)
                })
            }, [categoryId])


    return (
        <div> 
            {
                loading ? (
                    <Loader />
                ) : (
                    <ProductList productos={ productos } />
                )
            }
        </div>
    )
}

export default ProductListContainer;
