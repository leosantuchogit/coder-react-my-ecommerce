import ProductCard from "../ProductCard/ProductCard";
import BolsonFruta from "../ProductCard/assets/bolson-fruta.png"; 
import BolsonVerdura from "../ProductCard/assets/bolson-verdura.png"
import BolsonMixto from "../ProductCard/assets/bolson-mixto.png"



const ItemListContainer = ({productos}) => {
 
    const renderedProductos = productos.map((producto) => {
        return  <ProductCard titulo="Bolson de Frutas" descripcion="Este bolson contiene frutas de estacion..." precio="$2500" img={BolsonFruta} />
    })

   console.log(renderedProductos);

   return <div>{renderedProductos}</div>

    // return (
        

    
  
    //     <div class="container p-5">
    //         <div>ProductoList: {productos} </div>
    //         <div class="row">
    //             <div class="col-md">
    //                  <ProductCard titulo="Bolson de Frutas" descripcion="Este bolson contiene frutas de estacion..." precio="$2500" img={BolsonFruta} />
    //             </div>
    //             <div class="col-md">
    //                 <ProductCard titulo="Bolson de verduras" descripcion="Este bolson contiene verduras de estacion..." precio="$4500" img={BolsonVerdura} />
    //             </div>
    //             <div class="col-md">
    //                 <ProductCard titulo="Bolson Mixto" descripcion="Este bolson contiene frutas y verduras de estacion..." precio="$3500" img={BolsonMixto} />
    //             </div>
    //         </div>
    //     </div>


    // )

}

export default ItemListContainer;