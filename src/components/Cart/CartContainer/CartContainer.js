import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import { Link } from "react-router-dom"

import CartItemContainer from "../CartItemContainer/CartItemContainer"
import CartPurcharseSummary from "../CartPurcharseSummary/CartPurchareSummary"

const CartContainer = () => {

    const { cart, clearCart, totalQuantity, total } = useContext(CartContext)

    console.log("Estoy en el componente CartContainer");
    console.log(totalQuantity);
    console.log(cart);

   
    if (totalQuantity === 0) {
        return (
          
            <div className="p-5 text-center bg-info-subtle" style={{height:"500px"}}>
                <div className="container py-5">
                    <h1 className="text-body-emphasis">No hay ítems en el carrito</h1>
                    <Link to="/">Volver</Link>
                </div>
            </div>    
          
        )
    }

    return (
        
        //    {/* Card que contiene a todos los items del carrito */}

        <div class="container-md text-center p-3">
            <div class="row m-1">
                <div class="col-8">
                {/* 1 of 2 */}

                   <CartItemContainer />
                    
                </div>
                <div class="col-4">
                {/* 2 of 2 */}
                   <CartPurcharseSummary itemQuantity={5} itemTotal={15600} shippingTotal={1500} />
                </div>
            </div>
        </div>

/*
        <div className="p-5 bg-info-subtle"> 
           
                <div className="card">
                    <div class="card-header">
                        Productos
                    </div>
                    <ul class="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                    </ul>
                </div>

                <div className="card">
                    <div className="card-header">
                        Resumen de compra
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" class="btn btn-primary">Finalizar compra</a>
                    </div>
                </div>
        </div>
        */
    )
}

export default CartContainer