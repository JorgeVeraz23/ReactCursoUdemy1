import React from 'react';
import Titulo from './Titulo'
import styled from 'styled-components';

const Usuario = () => {
    const presentacion = "me llamo jorge";
    const color = 'blue';
const pais = "Ecuador";
const amigos = ['Jorge', 'Maria', 'Josue Veas']
    return (
      <div>
    
      <Titulo />
      <Titulo usuario = "Jorge" color = "green" />
  <Parrafo>que la pases bien... Saludos!</Parrafo>
  {pais && <p>tu eres de: {pais}</p>}
  <ul>
    {amigos.map((amigo, index) => {
      return <li key={index}>{amigo}</li>
    })}
  </ul>
      </div>
    )
  };

const Parrafo = styled.p`
    margin: 20px 0;
    `;

  export default Usuario;
  