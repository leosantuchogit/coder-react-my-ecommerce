import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
           <div className="p-5 text-center  bg-info-subtle">
                <div className="container py-5">
                    <h1 className="text-body-emphasis">404 - Página no encontrada</h1>
                    <Link to="/">
                        <p>Volver</p>
                    </Link>
                </div>
            </div>

           
            
        </div>
    )
}

export default Error;