import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
import ContadorFuncional from './componentes/ContadorFuncional';



const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);


  return (
<div>
  {sesion === true ? 
  <>
    <>
    <Usuario />
    <ContadorFuncional cantidadAIncrementar={100} cantidadADisminuir={20}/>
    <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button>

    </>
    </>
  :
   <>
    <FormularioInicioSesion cambiarEstadoSesion={cambiarEstadoSesion} />
   {/*<button onClick={() => cambiarEstadoSesion(true)}>Iniciar Sesion</button>
   */}
   </>
   
   }

</div>  
  )
}



/*const verificarSesion = (sesionvalor) => {
  if(sesion === true){
    return jsx;
  }else {
    return <h1>No has iniciado sesion</h1>
  }
}*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);



