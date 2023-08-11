import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

function ContextHijo3() {
    const {datosHijos} = useContext(DataContext);

    return (
        <div>
            <h2>Hijo 3</h2>
            <h2>{JSON.stringify(datosHijos)}</h2>
        </div>
    )
}

export default ContextHijo3;