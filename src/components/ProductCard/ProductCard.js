
import ButtonItemCounter from "./ButtonItemCounter";
import DiscountWidget from "./DiscountWidget";
import FavoriteWidget from "../FavoriteWidget/FavoriteWidget";
import RatingWidget from "../RatingWidget/RatingWidget";
import "./styles.css";

function ProductCard (producto) {


    const {titulo, descripcion, precio, img} = producto;

    return (

        <div className="card product-card m-1 product-card-img">
            
            <img src={ img } className="card-img-top" alt="bolson fruta" />              
        
            <div className="button-discount">
                <DiscountWidget discount={5}/>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{ titulo }</h5>
                <p className="card-text">{ descripcion }</p>
                <p className="card-text">{ precio }</p>
                <ButtonItemCounter />
                <FavoriteWidget />
                <RatingWidget />
            </div>


        </div>
        
    )

} 



export default ProductCard;