
import { useContext } from "react";
import CartItem from "../CartItem/CartItem";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

// Este componente devuelve una card que contiene todos los productos del carrito

const CartItemContainer = () => {

    const { cart, removeItem, clearCart } = useContext(CartContext)

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
            <div>
                <button type="button" 
                        class="btn btn-warning m-4" 
                        onClick={() => clearCart()} >
                        Vaciar carrito
                </button>
                <Link to={`/category/Frutas`} className="btn btn-info" >
                    Seguir comprando
                </Link>
            </div>
        </div>
    )
}

export default CartItemContainer;
