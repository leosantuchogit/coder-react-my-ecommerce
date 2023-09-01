import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="p-5 text-center  bg-info-subtle">
            <div className="container py-5">
                <h1 className="text-body-emphasis">Finalizar compra</h1>
                <Link to="/cart">Volver al carrito</Link>
            </div>
        </div>
    )
}

export default Checkout;