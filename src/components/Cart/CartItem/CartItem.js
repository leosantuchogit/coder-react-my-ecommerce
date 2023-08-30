// Exporta un item del carrito

const CartItem = ({ item, removeItem }) => {

    console.log("estoy en CartItem:", item);
    
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col text-start">{ item.titulo }</div>
                <div className="col text-start">{ item.quantity }</div>
                <div className="col text-end">${ item.precio }</div>
                <div className="col text-end">
                    <button type="button" 
                            class="btn btn-danger btn-sm" 
                            onClick={() => removeItem(item.id)} >
                            Eliminar
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CartItem