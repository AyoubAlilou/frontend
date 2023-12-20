import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom'
function index() {
  return (
    <div className="login-container">
    <h2>Login</h2>
    <form>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="Enter your username" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" placeholder="Enter your password" />

      <button type="submit">Login</button>
      <button type="submit"><Link to={'/odkhel'}>Rarja3 nayek</Link></button>
    </form>
  </div>
  )
}

export default index
