import {useState} from "react";

const ButtonItemCounter = () => {
    
    const [cantidad, setCantidad] = useState(0);  

    function handleClickItemAdd() {
        setCantidad(cantidad + 1)
    }

    function handleClickItemRemove() {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    }

    return (
        
        <div class="input-group mb-3 w-100">
            <button onClick={handleClickItemRemove} className="btn btn-primary" type="button" id="button-addon2">-</button>
            <input type="text" className="form-control text-center" value={cantidad} disabled />
            <button onClick={handleClickItemAdd} className="btn btn-primary" type="button" id="button-addon1">+</button>
        </div>

    ) 

}

export default ButtonItemCounter;