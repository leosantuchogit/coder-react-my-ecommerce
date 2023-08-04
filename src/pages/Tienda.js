

import listaProducto from "../data";
import ProductList from "../components/ProductList/ProductList";


function Tienda() {
    return (
        <div>
            
            <ProductList productos={listaProducto} />
            {/* <div>
                {listaProducto.map((producto)=>{
                    return (
                        <article key={ producto.id }>
                            <h5>{ producto.title }</h5>
                            <img src={ producto.image } alt="producto"/>
                            <Link to={`/productoDetail/${producto.id}`}>Mas info</Link>
                        </article>
                    )
                }
                )}
            </div> */}
           
        </div>
    )
}

export default Tienda;



// import { Link } from "react-router-dom";

// import listaProducto from "../data";


// function Tienda() {

//     console.log("estoy en page tienda");
//     console.log(listaProducto);

//     return (
//         <div>
//             <h1>Pagina Tienda</h1>

//             <div>
//                 {listaProducto.map((producto)=>{
//                     return (
//                         <article key={ producto.id }>
//                             <h5>{ producto.title }</h5>
//                             <img src={ producto.image } alt="producto"/>
//                             <Link to={`/productoDetail/${producto.id}`}>Mas info</Link>
//                         </article>
//                     )
//                 }
//                 )}
//             </div>
           
//         </div>
//     )
// }

// export default Tienda;

