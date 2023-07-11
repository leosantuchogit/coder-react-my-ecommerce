// import librerias

import React from "react"; // define que es un componente y como interacciona con otros
import ReactDOM from "react-dom/client"; // sabe como mostrar un componente en el navegador
import "./styles.css";
import App from "./App";

// obtener una referencia al div con id root
const divRoot = document.getElementById("root");

// Le decimos a react que tome control del elemento
const root = ReactDOM.createRoot(divRoot);

// Mostrar el componente en pantalla
root.render(<App/>);
