import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import db from '../database/candidates.json'
import CandidateNotFound from '../components/CandidateNotFound';
import { useNavigate } from 'react-router-dom'

export default function Candidate() {
  const [isCandidateValid, setIsCandidateValid] = useState('');
  const [candidateNumber, setCandidateNumber] = useState('');

  const numberFromGlobalState = useSelector((state) => (
    state.numberReducer.number));

  let navigate = useNavigate(); 
  const routeChangeHome = () =>{ 
    let path = '/'; 
    navigate(path);
  }
  const routeChangeSucess = () =>{ 
    let path = '/success'; 
    navigate(path);
  }
  
  const verifyNumber = (number) => {
    const verify = db.find((candidato) => candidato.numero === number);
    if (verify === undefined) {
      setIsCandidateValid(false)
    } else {
      setIsCandidateValid(true)
    }
  }

  const CandidateCard = () => {
    const candidate = db.find((candidato) => candidato.numero === candidateNumber);
    return (
      <>
        <section>
          <img src={candidate.image} alt={candidate.name} />
          <h1>{ candidate.name }</h1>
          <h2>{ `${candidate.partido} ${candidate.numero}` }</h2>
        </section>

        <button onClick={routeChangeHome}> Corrige</button>
        <button onClick={routeChangeSucess}>Confirma</button>
      </>
    )
  }


  

  useEffect(() => {
    setCandidateNumber(numberFromGlobalState);
    if (candidateNumber !== '') {
      verifyNumber(candidateNumber);
    }
  }, [candidateNumber, isCandidateValid])


  
  return (
    <main>
      { isCandidateValid ? <CandidateCard /> : <CandidateNotFound /> }
    </main>
  )
}
