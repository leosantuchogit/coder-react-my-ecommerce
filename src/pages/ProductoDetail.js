import { Link, useParams } from "react-router-dom";
import listaProducto from "../data";

function ProductoDetail() {

    // console.log(useParams());

    const {productoId} = useParams(); 
    const producto = listaProducto.find((producto)=>producto.id == productoId);
    const {image, title, price} = producto;

    return (
        <div>
            <h1>Pagina Detalle de Producto</h1>
            
            <img src={ image } />"
            <h2>{ title }</h2>
            <h2>{ price }</h2>
            <Link to="/tienda">Volver</Link>
        </div>
    )
}

export default ProductoDetail;