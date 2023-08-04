
import ButtonItemCounter from "./ButtonItemCounter";
import DiscountWidget from "./DiscountWidget";
import FavoriteWidget from "../FavoriteWidget/FavoriteWidget";
import RatingWidget from "../RatingWidget/RatingWidget";
import ButtonAddCart from "./ButtonAddCart";

import { Link } from "react-router-dom";

import "./css/product-card.css";


function ProductCard (producto) {


    const {key, titulo, descripcion, precio, img, stock, discount} = producto;

    console.log(producto.stock);

    return (

       
       
            <div className="card m-1 product-card">
                <Link className="link-no-decoration" to="/">
                    <img src={ img } className="card-img-top product-card-img p-5" alt="imagen" />              
                
                    <div className="button-discount">
                        <DiscountWidget discount={ discount }/>
                    </div>
                </Link>

                <div className="button-favorite">
                    <FavoriteWidget />
                </div>
                
                <div className="card-body">
                    <Link className="link-no-decoration card-body" to="/">
                        <h5 className="card-title text-truncate">{ titulo }</h5>
                        <p className="card-text text-truncate">{ descripcion }</p>
                        <p className="card-text text-success fw-bold">AR$ { precio }</p>
                    </Link>
                    <div>
                        <ButtonItemCounter />
                        <ButtonAddCart />
                    </div>
                    {/* <RatingWidget /> */}
                </div>


            </div>
     
    )

} 



export default ProductCard;