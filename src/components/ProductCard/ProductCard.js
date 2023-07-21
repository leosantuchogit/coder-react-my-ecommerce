
import ButtonItemCounter from "./ButtonItemCounter";
import DiscountWidget from "./DiscountWidget";
import FavoriteWidget from "../FavoriteWidget/FavoriteWidget";


function ProductCard (props) {


    const {titulo, descripcion, img} = props;

    return (

        <div className="card product-card m-1">
            <img src={ img } className="card-img-top" alt="bolson fruta" />  
            <div className="card-body">
                <h5 className="card-title">{ titulo }</h5>
                <p className="card-text">{ descripcion }</p>
                <ButtonItemCounter />
                <DiscountWidget />
                <FavoriteWidget />
            </div>


        </div>
        
    )

} 



export default ProductCard;