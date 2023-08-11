import {useState} from "react";

const ButtonItemCounter = ({ initial, stock, onAdd }) => {
    
    const [quantity, setQuantity] = useState(initial);  

    const incremenet = () => {

        if (quantity < stock ) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            <div class="input-group mb-3 w-100">              
                <button onClick={ decrement } className="btn btn-primary" type="button" id="button-addon2">
                    -
                </button>
                <input type="text" className="form-control text-center" value={ quantity } disabled />
                <button onClick={ incremenet } className="btn btn-primary" type="button" id="button-addon1">
                    +
                </button>
            </div>
            <div>
                <button type="button" className="btn btn-primary w-100" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>

    ) 

}

export default ButtonItemCounter;