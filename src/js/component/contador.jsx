import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ContadorFuncion = (props) =>{
    return (
        <div className="contador container-fluid">
            <i class="far fa-clock"></i>
            <div className="posiciones">{props.posicion4 %10}</div>
            <div className="posiciones">{props.posicion3 %10}</div>
            <div className="posiciones">{props.posicion2 %10}</div>
            <div className="posiciones">{props.posicion1 %10}</div>
        </div>
        
    );
}

ContadorFuncion.Prototype={
    posicion4: PropTypes.number,
    posicion3: PropTypes.number,
    posicion2: PropTypes.number,
    posicion1: PropTypes.number,
    

};

export default ContadorFuncion;