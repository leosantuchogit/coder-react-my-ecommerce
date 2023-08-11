import { useContext } from "react";
import { DataContext } from "../../context/DataContext";


function ContextNieto1() {

    const {datosNieto, contador, setContador} = useContext(DataContext);

    return (
        <div>
            <h2>Nieto 1</h2>
            <p>{JSON.stringify(datosNieto)}</p>
            <button onClick={()=>setContador(contador+1)}>{contador}</button>
        </div>
    )
}

export default ContextNieto1;