import React from 'react'
import { useNavigate } from 'react-router';

export default function Success() {
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/'; 
    navigate(path);
  }
  return (
    <>
      <div>Voto Registrado</div>
      <button onClick={routeChange}>Voltar à pagina inicial </button>
    </>
  )
}
