import React, {useState} from "react";

const FormularioInicioSesion = () => {
    const [usuario, cambiarUsuario] = useState('');
    const [password, cambiarPassword] = useState('');

    
    const onChangeUsuario = (e) => {
        cambiarUsuario(e.target.value);
    }
    
    const onChangePassword = (e) => {
        cambiarPassword(e.target.value);
    }

    return (
        <form action ="">
            <p>Usuario: {usuario}</p>
            <p>Contraseña: {password}</p>
            <div>
                <label htmlFor="usuario">Usuario</label>
                <input 
                type="text" 
                name="usuario" 
                id="usuario"
                value={usuario}
                onChange={onChangeUsuario}  
                />
            </div>
            <div>
                <label htmlFor="password">Contraseña</label>
                <input 
                type="password" 
                name="password" 
                id="password"
                value={password}
                
                onChange={onChangePassword}
                />
            </div>
            <button type="submit">Iniciar Sesion</button>
        </form>
    );
}

export default FormularioInicioSesion;