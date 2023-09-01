import ProductDetail from "../ProductDetail/ProductDetail";
import Loader from "../../Util/Loader/Loader";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase/firebase";

const ProductDetailContainer = () => {
    
    const {productoId} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        
        const collectionRef = doc(db, 'productos', productoId)

        getDoc(collectionRef) 
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data }
                setProductos(productsAdapted)
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false)
            })

    }, [productoId])

    return (
        <div>
            {
                loading ? (
                    <Loader />
                ) : (
                    <ProductDetail  id={productos.id} 
                                    titulo={productos.title}
                                    descripcion={productos.description}
                                    precio={productos.price}
                                    img={productos.image}
                                    stock={productos.stock}
                                    discount={productos.discount}
                                    category={productos.category}
                    />
                )
            }
        </div>
    )
}

export default ProductDetailContainer