import React, { useState, useEffect } from 'react'
import './App.css';
import UserForm from '../src/components/user_form'
import axios from 'axios'
import * as yup from 'yup'
import schema from '../src/validation/schema'
import User from '../src/components/user'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms_of_service: false,
};

const initialFormErrors = {
  name: '',
  email: '',
  password: '',

};

const initialUser = [];
const initialDisabled = true;

function App() {

  const [user, setUser] = useState(initialUser)          // array of user objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //implement on success that friends are put on state
  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //   .then(res => {
  //     setUser(res.data)
  //   })
  //   .catch(err => {
  //     console.log(err, 'error')
  //   })
  // }

  //implement on success add newly created user to state
  const postUser = (newUser) => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([...user, res.data])
      console.log(res.data)
      
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log(err)
    })
  }


  // input change - run validaton with yup
const inputChange = (name, value) => {
  yup
  .reach(schema, name)
  .validate(value)
  .then(() => {
    setFormErrors({
      ...formErrors,
      [name]: "",
    })
  })
  .catch((err) => {
    setFormErrors({
      ...formErrors,
      err: err.errors
    })
  })

  setFormValues({
    ...formValues,
    [name]: value,
  })
}

  //submit form function 
  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      terms_of_service: formValues.terms_of_service,
    }
    postUser(newUser)
  }

  // side effects

  // useEffect(() => {
  //   getUsers()
  // }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid)
    })
  }, [formValues]);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Onboarding</h1>
      </header>

      <UserForm
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />

    {user.map((usr) => {
      return <User key={user.id} details={usr} />
    })}
    </div>
  );
}

export default App;
