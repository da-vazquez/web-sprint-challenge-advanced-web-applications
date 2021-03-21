import React from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';

// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route


class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }}
    )
  }

  FormReset = () => {
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = ""))
  }

 
  login = e => {
    e.preventDefault()
      axios.post('http://localhost:5000/api/login', this.state.credentials)
      .then(res => {
        console.log(res)
        localStorage.setItem('authToken', res.data.payload)
        
          
      })
      .catch(err => console.log(err))
        this.FormReset()
    }


  render() {
    return (
    <div className='login-container'>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          value={this.state.credentials.username}
          onChange={this.handleChange}
          placeholder='enter username'
          style={{marginRight: '5px'}}
        />
        <input
          type="password"
          name="password"
          value={this.state.credentials.password}
          onChange={this.handleChange}
          placeholder='enter password'
          style={{marginRight: '5px'}}
        />
        <button className='login-button'>Sign In</button>
      </form>
    </div>
  )}
}


export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.