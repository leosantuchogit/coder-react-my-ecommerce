
// React
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// My components
import Loader from "../../Util/Loader/Loader";
import ProductList from "../ProductList/ProductList";

// Firebase
import { getDocs, collection, doc, query, where } from "firebase/firestore";
import { db } from "../../../services/firebase/firebase";


function ProductListContainer() {

    const {categoryId, input} = useParams()
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

                    const productsArray = input 
                        ? productsAdapted.filter(item => item.title == input)
                        : productsAdapted

                    setProductos(productsArray)

                    // console.log(productsAdapted);
   
                })
                .catch(error => {
                    console.log(error);
                })
                .finally(() => {
                    setLoading(false)
                })
            }, [categoryId, input])


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
