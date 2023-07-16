import ProductCard from "../ProductCard/ProductCard";
import BolsonFruta from "../ProductCard/assets/bolson-fruta.png"; 
import BolsonVerdura from "../ProductCard/assets/bolson-verdura.png"
import BolsonMixto from "../ProductCard/assets/bolson-mixto.png"

const ItemListContainer = (props) => {
    const {titulo, descripcion, imagen} = props;
    
    return (
        
        <div class="container p-5">
            <div class="row">
                <div class="col-md">
                     <ProductCard titulo="Bolson de Frutas" descripcion="Este bolson contiene frutas de estacion..." img={BolsonFruta} />
                </div>
                <div class="col-md">
                    <ProductCard titulo="Bolson de verduras" descripcion="Este bolson contiene verduras de estacion..." img={BolsonVerdura} />
                </div>
                <div class="col-md">
                    <ProductCard titulo="Bolson Mixto" descripcion="Este bolson contiene frutas y verduras de estacion..." img={BolsonMixto} />
                </div>
            </div>
        </div>


    )

}

export default ItemListContainer