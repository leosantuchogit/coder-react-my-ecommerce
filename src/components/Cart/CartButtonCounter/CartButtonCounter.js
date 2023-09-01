
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const CartButtonCounter = () => {

    const { cart } = useContext(CartContext)
    
    return (
        <div>
            <Link to="Cart">
            <button type="button" className="btn btn-primary position-relative">

                <FontAwesomeIcon icon={faCartShopping} />
                        
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    { cart.length }
                    <span className="visually-hidden">Carrito</span>
                </span>
                
            </button>
            </Link>
        </div>    
    )
}

export default CartButtonCounter
