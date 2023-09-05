import { useState } from "react";
import { Link } from "react-router-dom";

const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = { name, phone, email }

        onConfirm(userData)
    }

    return (

        <div className="p-5 text-center  bg-info-subtle">
            <h1>Checkout</h1>
            <form onSubmit={ handleConfirm } className="Form">
                <div className="row justify-content-md-center">
                    <div className="col-8 border rounded-3"> 
                        <div className="p-4">
                            <div className="form-floating mb-3">
                                <input  type="text" 
                                        class="form-control" 
                                        id="floatingInput" 
                                        placeholder="Nombre" 
                                        value={ name }
                                        onChange={({ target }) => setName(target.value)}
                                />
                                <label for="floatingInput">Nombre</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input  type="text" 
                                        class="form-control" 
                                        id="floatingInput" 
                                        placeholder="Telefono" 
                                        value={ phone }
                                        onChange={({ target }) => setPhone(target.value)}
                                />
                                <label for="floatingInput">Telefono</label>
                            </div>
                            <div className="form-floating">
                                <input  type="email" 
                                        class="form-control" 
                                        id="floatingInput" 
                                        placeholder="name@example.com" 
                                        value={ email }
                                        onChange={({ target }) => setEmail(target.value)}
                                />
                                <label for="floatingInput">Email</label>
                            </div>
                        </div>
                        
                        
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary mt-3" >Crear orden</button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default CheckoutForm