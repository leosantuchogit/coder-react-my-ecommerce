
import DiscountWidget from "../Widget/DiscountWidget";
import FavoriteWidget from "../Widget/FavoriteWidget";

import { Link } from "react-router-dom";

import "./css/product-card.css";


function ProductCard (producto) {

    const {id, titulo, descripcion, precio, img, stock, discount} = producto;

    return (

            // Los <Link> los ubico en diferentes lugares para que al hacer click en la card te dirija el detalle del producto
            <div className="card m-1 product-card">
                <Link className="link-no-decoration card-body" to={`/producto/${id}`}>
                    <img src={ img } className="card-img-top imagen p-5" alt="imagen" />              
                
                    <div className="button-discount">
                        <DiscountWidget discount={ discount }/>
                    </div>
                </Link>

                <div className="button-favorite">
                    <FavoriteWidget />
                </div>
                
                <div className="card-body">
                    <Link className="link-no-decoration card-body" to={`/producto/${id}`}>
                        <h5 className="card-title text-truncate">{ titulo }</h5>
                        <p className="card-text text-truncate">{ descripcion }</p>
                        <p className="card-text text-success fw-bold">UD$ { precio }</p>
                    </Link>
                    <Link to={`/producto/${id}`}>
                        <button type="button" className="btn btn-primary w-100">Ver detalle</button>
                    </Link>
                </div>
            </div>
     
    )

} 

export default ProductCard;