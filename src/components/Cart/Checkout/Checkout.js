import { Link } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="p-5 text-center  bg-info-subtle">
            <div className="row justify-content-md-center">
                <div className="col-8 border rounded-3"> 
                    <div className="p-4">
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Nombre" />
                            <label for="floatingInput">Nombre</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Telefono" />
                            <label for="floatingInput">Telefono</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label for="floatingInput">Email</label>
                        </div>
                    </div>
                    <div>
                        <Link to="/checkout">
                            <a className="btn btn-primary mb-3 me-2">Crear orden</a>
                        </Link>

                        <Link to="/cart">
                            <a className="btn btn-danger mb-3 me-2">Cancelar</a>
                        </Link>
                    </div>
                </div>
              
              </div>
        </div>
    )
}

export default Checkout;

