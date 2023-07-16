
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({ item }) => {
    
    return (
        <div>
     
            <button type="button" className="btn btn-primary position-relative">

                <FontAwesomeIcon icon={faCartShopping} />
                        
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    { item }
                    <span className="visually-hidden">Carrito</span>
                </span>
                
            </button>
        </div>    
    )
}


export default CartWidget
