import { Link } from "react-router-dom";

const CartItem = ({ item, removeItem }) => {
    
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col text-start">
                    <Link to={`/producto/${item.id}`}>
                        { item.titulo }
                    </Link>
                </div>
                <div className="col text-start">Cantidad: { item.quantity }</div>
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