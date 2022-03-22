import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { GET_NUMBER } from '../redux/actions';
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function Inputs() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const dispatch = useDispatch();

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = '/success'; 
    navigate(path);
  }

  const handleClickConfirma = () => {
    setIsButtonClicked(true);
    const number = firstNumber+secondNumber;
    dispatch({ type: GET_NUMBER, payload: number });
  };
  return (
    <main>
      <label htmlFor="login-name-input">
          <input
            type="text"
            maxLength={1}
            placeholder="Digite um numero"
            required
            value={ firstNumber }
            onChange={ ({ target: { value } }) => {
              setFirstNumber(value) }
            }
          />
          <input
            type="text"
            maxLength={1}
            placeholder="Digite um numero"
            required
            value={ secondNumber }
            onChange={ ({ target: { value } }) => {
              setSecondNumber(value) }
            }
          />
        </label>
        <section>
        <button onClick={ handleClickConfirma }>Pesquisar</button>
        <button onClick={ routeChange }>Branco</button>
      </section>
      {isButtonClicked ? <Navigate to="/candidato" /> : ''}
    </main>
  )
}
