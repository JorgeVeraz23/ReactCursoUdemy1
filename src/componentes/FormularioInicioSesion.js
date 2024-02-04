import React, {useState} from "react";
import './FormularioInicioSesion.css';
import Boton from './../elementos/Boton'

const FormularioInicioSesion = (props) => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    

    const onChange = (e) =>{
        if(e.target.name === 'usuario'){
            cambiarUsuario(e.target.value)
        }else if(e.target.name === 'password'){
            cambiarPassword(e.target.value)
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(usuario === 'carlos' && password === '123'){
            props.cambiarEstadoSesion(true);
        }else {
            alert('datos incorrectos');
            cambiarUsuario('');
            cambiarPassword('');
        }
    }
   

    return (
        
        <form action ="" onSubmit={onSubmit} className="formulario">
            {/*<p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            */}
            <h1>No Has Iniciado Sesion</h1>
            <div>
                <label htmlFor="usuario" className="label">Usuario</label>
                <input 
                type="text" 
                name="usuario" 
                id="usuario"
                value={usuario}
                onChange={onChange}
                className="input"  
                />
            </div>
            <div>
                <label htmlFor="password" className="label">Contraseña</label>
                <input 
                type="password" 
                name="password" 
                id="password"
                value={password}
                onChange={onChange}
                className="input"
                />
            </div>
            {/*<button type="submit" className="boton">Iniciar Sesion</button>
        */}
        <Boton type = "submit">Iniciar Sesion</Boton>
        </form>
    );
}

export default FormularioInicioSesion;