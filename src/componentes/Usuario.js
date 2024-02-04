import React from 'react';
import Titulo from './Titulo'

const Usuario = () => {
    const presentacion = "me llamo jorge";
    const color = 'blue';
const pais = "Ecuador";
const amigos = ['Jorge', 'Maria', 'Josue Veas']
    return (
      <div>
    
      <Titulo />
      <Titulo usuario = "Jorge" color = "green" />
  <p>que la pases bien... Saludos!</p>
  {pais && <p>tu eres de: {pais}</p>}
  <ul>
    {amigos.map((amigo, index) => {
      return <li key={index}>{amigo}</li>
    })}
  </ul>
      </div>
    )
  };

  export default Usuario;
  