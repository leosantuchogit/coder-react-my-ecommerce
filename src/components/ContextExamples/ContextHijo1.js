
import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import ContextNieto1 from "./ContextNieto1";

function ContextHijo1() {

    const {datosHijos} = useContext(DataContext);


    return (
        <div>
            <h2>Hijo 1</h2>
            <h2>{JSON.stringify(datosHijos)}</h2>
            <ContextNieto1></ContextNieto1>
        </div>
    )
}

export default ContextHijo1;