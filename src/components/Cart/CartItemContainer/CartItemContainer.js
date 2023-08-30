
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../Context/CartContext";

// Este componente devuelve una card que contiene todos los productos del carrito

const CartItemContainer = () => {

    const { cart, removeItem } = useContext(CartContext)

    return (
        <div className="card shadow-sm border border-light-subtle">
            <div className="card-header fw-bold fs-6 bg-white">
                Productos
            </div>
            <ul class="list-group list-group-flush">          
             
                { cart.map(item => <CartItem 
                                        key={ item.id } 
                                        item={ item } 
                                        removeItem={ removeItem } 
                                        />
                            )}

            </ul>
        </div>
    )
}

export default CartItemContainer;
