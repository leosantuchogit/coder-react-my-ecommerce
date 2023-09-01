import "./css/product-detail.css";
import ButtonItemCounter from "../Widget/ButtonItemCounter"
import FavoriteWidget from "../Widget/FavoriteWidget";
import DiscountWidget from "../Widget/DiscountWidget";
import { CartContext } from "../../Cart/Context/CartContext";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";

const ProductDetail = ( {id, titulo, descripcion, precio, img, stock, discount, category }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    // Importo la funcion de addItem del CartContext
    const { addItem } = useContext(CartContext)

    // Es un callback y esta funcion se ejecuta cuando hace click en el button "Agregar al carrito" que esta en el componente ButtonItemCounter
    const handleOnAdd = (quantity) => {

       
        // Seteo la cantidad recibida
        setQuantityAdded(quantity)

        // console.log("Productos agregados al carrito: ", quantity, "nombre", titulo);
        console.log("Producto en el carrito: ", titulo, "cantidad: ", quantity);

        // Armo un objeto minimo que se va a agregar al carrito.
        const item = {
            id, titulo, precio
        }

        // Les paso el item y la cantidad al addItem que esta en el CartContext
        addItem(item, quantity)
    }
    
    return (
        // <div className="card mb-3" style="max-width: 540px;">
        <div className="card mb-3 m-3 product-detail">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src= { img } className="img-fluid rounded-start p-0" alt="imagen"/>
                </div>
                <div className="col-md-8 border-start" >
                    <div className="card-body">
                        <div className="button-favorite">
                            <FavoriteWidget />
                        </div>

                       
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={`/category/${category}`}>
                                        <a>{ category }</a>
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">{ titulo }</li>
                            </ol>
               

                        <h5 className="card-title fw-bold">{ titulo }</h5>
                        <p className="card-text">{ descripcion }</p>
                        <p className="card-text text-success fw-bold"><DiscountWidget discount={ discount }/> UD$ { precio } </p>
                        <p className="card-text text-secondary fw-bold">Stock: { stock }</p>
                    </div>
                    <div className="d-flex justify-content-start">
                        <div className="w-50 p-3">
                            <ButtonItemCounter initial={ 1 } stock={ stock } onAdd={ handleOnAdd }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail


