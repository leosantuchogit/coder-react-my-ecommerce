// Exporta un item del carrito

const CartItem = () => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col text-start">Nombre producto</div>
                <div className="col text-start">Cantidad</div>
                <div className="col text-end">Precio</div>
            </div>
        </li>
    )
}

export default CartItem