import React from 'react'

import './App.css';

const Form = ({
  inputValues,
  handleChange,
  fetchZipCode,
  setFetch,
  setInputValues,
  hasError
}) =>
  <form >
    <fieldset className='Input-wrapper'>
      <legend>Nome</legend>
      <input
        className='App-input'
        value={inputValues['name']}
        placeholder='Digite seu Nome'
        name='name'
        onChange={({ target }) => handleChange(target)}
      />
    </fieldset>
    <fieldset className='Input-wrapper'>
      <legend>Email</legend>
      <input
        className='App-input'
        value={inputValues['email']}
        placeholder='Digite o seu email'
        name='email'
        onChange={({ target }) => handleChange(target)}
      />
    </fieldset>
    <fieldset className='Input-wrapper'>
      <legend>Senha</legend>
      <input
        className='App-input'
        value={inputValues['password']}
        placeholder='Digite sua senha'
        name='password'
        onChange={({ target }) => handleChange(target)}
      />
    </fieldset>
    <fieldset className='Input-wrapper'>
      <legend>CPF</legend>
      <input
        className='App-input'
        value={inputValues['cpf']}
        placeholder='Digite seu CPF'
        name='cpf'
        onChange={({ target }) => handleChange(target)}
      />
    </fieldset>
    <fieldset className='Input-wrapper'>
      <legend>CEP</legend>
      <input
        className='App-input'
        value={inputValues['cep']}
        placeholder='Digite seu CEP'
        name='cep'
        onChange={({ target }) => fetchZipCode(target)}
      />
    </fieldset>
    {
      hasError && <p className='App-error'>Cep Inválido</p>
    }
    <fieldset className='Input-wrapper'>
      <legend>Cidade</legend>
      <input
        className='App-input'
        value={inputValues['city']}
        placeholder='Digite o nome da sua Cidade'
        name='city'
        onChange={({ target }) => handleChange(target)}
      />
    </fieldset>
    <fieldset className='Input-wrapper'>
      <legend>Estado</legend>
      <input
        className='App-input'
        value={inputValues['state']}
        placeholder='Digite o nome do seu Estado'
        name='state'
        onChange={({ target }) => handleChange(target)}
      />
    </fieldset>
    <fieldset className='Input-wrapper'>
      <legend>Bairro</legend>
      <input
        className='App-input'
        value={inputValues['neighborhood']}
        placeholder='Digite o nome do seu Bairro'
        name='neighborhood'
        onChange={({ target }) => handleChange(target)}
      />
    </fieldset>

    <button className='App-button' onClick={() => {
      setFetch(true)
      setInputValues({})
    }}>
      Cadastrar Dados
</button>
  </form>

export default Form