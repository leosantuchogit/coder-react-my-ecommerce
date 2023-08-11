import { createContext, useState } from "react";

const datosHijos = {
    nombre: "Pepe", 
    apellido: "Lopez", 
    edad:22
};

const datosNietos = {
    nombre: "Marc", 
    apellido: "Hilbert", 
    edad:62
};


export const DataContext = createContext();




export const DataProvider = ({children}) => {
    const [contador, setContador] = useState(0)


    return (
        <DataContext.Provider value={{datosHijos, datosNietos, contador, setContador}}>
            {children}
        </DataContext.Provider>
    )
}