
import CartItem from "../CartItem/CartItem";

// Este componente devuelve una card que contiene todos los productos del carrito

const CartItemContainer = () => {
    return (
        <div className="card shadow-sm border border-light-subtle">
            <div className="card-header fw-bold fs-6 bg-white">
                Productos
            </div>
            <ul class="list-group list-group-flush">
                {/* <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li> */}
                <CartItem />
            </ul>
        </div>
    )
}

export default CartItemContainer;
