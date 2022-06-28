//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import ContadorFuncion from "./component/contador.jsx";
import "../styles/estilos.css";



//render your react application

let contador = 0;
setInterval(function(){
	const cuatro = Math.floor(contador/1000);
    const tres = Math.floor(contador/100);
    const dos = Math.floor(contador/10);
    const uno = Math.floor(contador/1);
    contador++;
    ReactDOM.render(<ContadorFuncion
        posicion1={uno}
        posicion2={dos}
        posicion3={tres}
        posicion4={cuatro} 
        />
        , document.querySelector("#app"));
},1000);

