import { useState, useEffect } from "react";

const TimerWidget = ({second = 60}) => {

    const [contador, setContador] = useState(second);

    useEffect( ()=>{
        setTimeout(() => {

            if (contador > 0) {
                setContador(contador - 1)
            }
            
        
        }, 1000);
    } )

    return (

        <h1>Contador: {contador}</h1>

    )

}

export default TimerWidget;