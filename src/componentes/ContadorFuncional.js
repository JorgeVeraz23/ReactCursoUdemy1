import React, {useState, useEffect} from 'react';
import './ContadorFuncional.css';
import Boton from './../elementos/Boton'

const ContadorFuncional = (props) => {
    const [cuenta, cambiarCuenta] = useState(0);

    //componenDidMount y componentDidUpdate son lo mismo que useEffect es decir este metodo se ejecuta cuando carga en el dom por primera vez y cada que se actualiza 
    //Este hook se ejecuta cada ciclo de renderizado
    useEffect(() => {
        console.log('El componente se renderizo');
    })

    //el siguiente useEffect sirve para que el componente se cargue una sola vez lo cual es util cuando queremos hacer una conexion de una APi
    //en componentes de clases se lo conoce como componentDidMount
    /*useEffect(() => {
        console.log('El componente cargo por primera vez ')
    }, []);*/
    //el siguiente hook es importante para cuando queremos ver cuando cambia el estado de un componente especifico
    
   /* useEffect(() => {
        console.log('El estado del contador cambio')
    }, [cuenta]);*/

    //este es util para cuando queremos cerrar la conexion a una api
    useEffect(() => {
        //Codigo del efecto
        return (() => {
            console.log('Adios componente!')
        });
    }, []);
   
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
            <Boton negro marginRight onClick={() => incrementar(props.cantidadAIncrementar)}>Incrementar</Boton>
            <Boton negro onClick={() => disminuir(props.cantidadADisminuir)}>Disminuir</Boton>
    </div>
    );
}

export default ContadorFuncional;