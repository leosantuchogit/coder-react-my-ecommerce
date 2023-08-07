import {useState} from "react";

const ButtonItemCounter = ( {stock} ) => {
    
    const [cantidad, setCantidad] = useState(0);  

    const incremenet = () => {

        if (cantidad < stock ) {
            setCantidad(cantidad + 1)
        }
    }

    const decrement = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        
        <div class="input-group mb-3 w-100">
            <button onClick={ decrement } className="btn btn-primary" type="button" id="button-addon2">-</button>
            <input type="text" className="form-control text-center" value={cantidad} disabled />
            <button onClick={ incremenet } className="btn btn-primary" type="button" id="button-addon1">+</button>
        </div>

    ) 

}

export default ButtonItemCounter;