import { useContext, useState, useEffect } from "react";
import CheckoutForm from "./CheckoutForm";
import { CartContext } from "../Context/CartContext";
import { db } from "../../../services/firebase/firebase";
import { Timestamp, collection, addDoc, documentId, getDoc, getDocs, query, where, writeBatch } from "firebase/firestore";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Checkout = () => {

    const MySwal = withReactContent(Swal)

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')

    const { cart, totalPrice, clearCart } = useContext(CartContext)

    const createOrder = async({ name, phone, email }) => {
        setLoading(true)

       console.log(totalPrice());

        try {
            const objOrder = {
                buyer: { name, phone, email },
                items: cart, 
                total: totalPrice(),
                date: Timestamp.fromDate(new Date())
            }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, "productos")
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids))); 
            const { docs } = productsAddedFromFirestore;

            docs.forEach(doc => {
                const dataDoc = doc.data();
                const stockDb = dataDoc.stock;

                const productsAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productsAddedToCart?.quantity;

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc });
                }
            });

            if (outOfStock.length === 0) {
                await batch.commit();

                const orderRef = collection(db, 'orders');

                console.log("objOrder: ", objOrder);

                const orderAdded = await addDoc(orderRef, objOrder);

                setOrderId(orderAdded.id);
                clearCart();
            } else {
                console.error('producto sin stock');
            }

        } catch (error) {
            console.log("ERROR:", error);
            
        } finally {
            setLoading(false)
        }


    }

    useEffect(() => {
        if (!loading && orderId) {
            console.log('Order ID:', orderId);
            Swal.fire({
                icon: 'success',
                title: "Su orden se ha generado correctamente",
                text: `El id de su pedido es : ${orderId}`,
                showConfirmButton: true,
            });

        } else if (loading) {
            Swal.fire({
                title: "Generando su pedido..",
                text: "Espere mientras se genera su ID...",
                showConfirmButton: false,
                // timer: 1600
            });
        }
    }, [loading, orderId]);

    return (
       <div>
            <CheckoutForm onConfirm={ createOrder } />
       </div>
    )
}

export default Checkout;

