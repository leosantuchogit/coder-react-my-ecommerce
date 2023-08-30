import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
import CartItemContainer from "../CartItemContainer/CartItemContainer"
import CartPurcharseSummary from "../CartPurcharseSummary/CartPurchareSummary"

const CartContainer = () => {

    const { cart } = useContext(CartContext)

    return (
        <>
            {
                // Verifico si hay algo en el carrito 
                cart.length === 0 ? (
                    <div className="p-5 text-center bg-info-subtle" style={{height:"500px"}}>
                        <div className="container py-5">
                            <h1 className="text-body-emphasis">No hay ítems en el carrito</h1>
                            <Link to="/">Volver</Link>
                        </div>
                    </div>    
                ) : (

                    // Container de todos los items que estan en el carrito 
                    <div class="container-md text-center p-3">
                        <div class="row m-1">
                            
                            <div class="col-8">
                                <CartItemContainer />         
                            </div>
                            
                            <div class="col-4">
                                <CartPurcharseSummary shippingTotal={1500} />
                            </div>
                        </div>
                    </div>
                )
            }
        </>

    )
}

export default CartContainer