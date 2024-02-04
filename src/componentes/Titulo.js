import React from 'react';



const Titulo = ({usuario = 'usuario', color = 'grey'}) => {
   
   
    return (<h1 className="titulo" style = {{color : color}}>Hola perros {usuario}</h1>);
}

export default Titulo;