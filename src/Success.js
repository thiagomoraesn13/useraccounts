import React from 'react'
import './App.css';
import { BsCheckCircle } from 'react-icons/bs';


const Success = ({setFetch}) =>
  <>
    <div className='App-wrapper-success'>
      <p className='App-success'> DADOS CADASTRADOS COM SUCESSO </p>
      <BsCheckCircle className='App-icon' />
    </div>

    <button className='App-button' onClick={() => setFetch(false)}>
      Cadastrar Novo Usuário
   </button>
  </>

  export default Success