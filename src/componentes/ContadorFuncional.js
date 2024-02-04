import React, {useState} from 'react';
import './ContadorFuncional.css';
import Boton from './../elementos/Boton'

const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);

    const incrementar = (cantidad) => {
        cambiarCuenta(cuenta + cantidad);
    }
    const disminuir = (cantidad) => {
        cambiarCuenta(cuenta - cantidad);
    }

    return(
        <div>
            <h1>Contador: {cuenta}</h1>
           {/* <button className='boton-contador' onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</button>
            <button className='boton-contador' onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</button>
    */}
            <Boton onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
    </div>
    );
}

export default ContadorFuncional;