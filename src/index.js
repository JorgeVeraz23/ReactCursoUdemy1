import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';




const App = () => {
  const [sesion, cambiarEstadoSesion] = useState(false);


  return (
<div>
  {sesion === true ? 
  <>
    <>
    <Usuario />
    <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button>

    </>
    </>
  :
   <>
    <FormularioInicioSesion />
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



