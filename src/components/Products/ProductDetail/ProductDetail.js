
import ButtonItemCounter from "../ProductCard/ButtonItemCounter"
import ButtonAddCart from "../ProductCard/ButtonAddCart"
import FavoriteWidget from "../../FavoriteWidget/FavoriteWidget";
import DiscountWidget from "../ProductCard/DiscountWidget";

import "./css/product-detail.css";

const ProductDetail = ( {id, titulo, descripcion, precio, img, stock, discount }) => {
    
    return (
        // <div className="card mb-3" style="max-width: 540px;">
        <div className="card mb-3 m-3 product-detail">
            <div class="row g-0">
                <div className="col-md-4">
                    <img src= { img } className="img-fluid rounded-start p-5" alt="imagen"/>
                </div>
                <div className="col-md-8 border-start" >
                    <div className="card-body">
                        <div className="button-favorite">
                            <FavoriteWidget />
                        </div>
                        <h5 className="card-title fw-bold">{ titulo }</h5>
                        <p className="card-text">{ descripcion }</p>
                        <p className="card-text text-success fw-bold"><DiscountWidget discount={ discount }/> UD$ { precio } </p>
                        <p className="card-text text-secondary fw-bold">Stock: { stock }</p>
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="w-50 p-3">
                            <ButtonItemCounter stock={ stock }/>
                            <ButtonAddCart stock={ stock }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail


