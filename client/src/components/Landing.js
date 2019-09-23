import React from 'react'
//import logo from './logo.svg'
import logo from './emaily.png'
import './Landing.css'

const Landing = () => {
  return(
    <div style={{ textAlign: 'center'}}>
      <h1>Emaily</h1>
      <center><img src={logo} className="App-logo" alt="logo" /></center>
      <h3>Collect feedback from your users</h3>
    </div>
  )
}

export default Landing