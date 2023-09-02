import { Link } from "react-router-dom"

const OrderResult = () => {

    return (

        <div className="p-5 text-center bg-info-subtle" style={{height:"500px"}}>
            <div className="container py-5">
                <h1 className="text-body-emphasis">Su orden de creo correctamente</h1>
                <h2 className="text-body-emphasis">En algunos minutos le llegará un correo electronico con el detalle de la compra</h2>
                <Link to="/">
                        <a className="btn btn-primary m-3 p-3">Seguir comprando...</a>
                </Link>
            </div>
        </div>    

    )

}

export default OrderResult