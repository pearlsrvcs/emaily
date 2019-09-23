import React from 'react'
import logo from './logo.svg'
import googleSignin from './login-with-google.jpg'
import './App.css'

function Application() {
  return (
    <div className="Application">
      <header className="App-header">
        <h1>Welcome to Emaily, made with React</h1>
        <img src={logo} className="App-logo" alt="logo" />        
        <a href="/auth/google">
         <img src={googleSignin} width="300" alt="google-signin"/>
        </a>
      </header>
    </div>
  );
}

export default Application;
