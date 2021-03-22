import React, { useState } from "react";

import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../helpers/axiosWithAuth';

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route
const initialValues = {
  username: '',
  password: '',
}

const Login = () => {
  const [auth, setAuth] = useState(initialValues)

  const history = useHistory()


  const handleChange = e => {
    setAuth({
      ...auth,
      [e.target.name]: e.target.value
    }
  )}

  const formReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = ""))
  }

 
  const handleSubmit = e => {
    e.preventDefault()
      axiosWithAuth().post('login', auth)
      .then(res => {
        console.log('user logged in', res)
        localStorage.setItem('authToken', res.data.payload)
        history.push('/bubbles')  
      })
      .catch(err => {
        alert('incorrect combination of username/password')
        console.log('error loggin in', err)
      })
  }
  
    return (
    <div className='login-container'>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={auth.username}
          onChange={handleChange}
          placeholder='enter username'
          style={{marginRight: '5px'}}
        />
        <input
          type="password"
          name="password"
          value={auth.password}
          onChange={handleChange}
          placeholder='enter password'
          style={{marginRight: '5px'}}
        />
        <button className='login-button'>Sign In</button>
      </form>
    </div>
  )
}



export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.