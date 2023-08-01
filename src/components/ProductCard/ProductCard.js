
import ButtonItemCounter from "./ButtonItemCounter";
import DiscountWidget from "./DiscountWidget";
import FavoriteWidget from "../FavoriteWidget/FavoriteWidget";
import RatingWidget from "../RatingWidget/RatingWidget";
import "./css/product-card.css";

function ProductCard (producto) {


    const {key, titulo, descripcion, precio, img} = producto;

    return (

        <div className="card m-1 product-card">
            
            <img src={ img } className="card-img-top product-card-img" alt="imagen" />              
        
            <div className="button-discount">
                <DiscountWidget discount={5}/>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{ titulo }</h5>
                <p className="card-text">{ descripcion }</p>
                <p className="card-text text-success fw-bold">{ precio }</p>
                <ButtonItemCounter />
                <FavoriteWidget />
                <RatingWidget />
            </div>


        </div>
        
    )

} 



export default ProductCard;