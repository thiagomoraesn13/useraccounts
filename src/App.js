import React, { useState } from 'react';
import './App.css';

import axios from 'axios'

import Form from './Form';
import Success from './Success';

const App = () => {
  const [inputValues, setInputValues] = useState({
    name: '',
    cpf: '',
    cep: '',
    state: '',
    neighborhood: '',
    city: '',
    password: '',
    email:''
  })

  const [hasError, setError] = useState(false)

  const [fetch, setFetch] = useState(false)

  const handleChange = ({ value, name }) => setInputValues({ ...inputValues, [name]: value })

  const fetchZipCode = async ({ value, name }) => {

    handleChange({ value, name })

    if (value.length === 8) {
      try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${value}/json`)

        if (data.erro) {
          setError(true)
        } else {
          setError(false)

          setInputValues({
            ...inputValues,
            cep: value,
            state: data.uf,
            neighborhood: data.logradouro,
            city: data.localidade
          })
        }
      }
      catch (error) {
        console.error(error)
      }
    }
  }


  return (
    <div className="App">
      <div className='App-paper'>
        <p className='App-title'>Cadastro de Usuários</p>
        {
          !fetch
            ? (
              <Form
                inputValues={inputValues}
                handleChange={handleChange}
                fetchZipCode={fetchZipCode}
                setFetch={setFetch}
                setInputValues={setInputValues}
                hasError={hasError}
              />
            )
            : (
              <Success setFetch={setFetch} />
            )
        }
      </div>
    </div>
  );
}

export default App;
