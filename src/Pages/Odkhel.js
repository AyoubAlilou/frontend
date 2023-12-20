import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import userService from '../Services/userService'
const Odkhel = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    bio: '',
    birthdate: '',
  })
  const formValidation = () => {
    let status = true
    let localErrors = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      bio: '',
      birthdate: '',
    }

    if (email == '') {
      localErrors.email = 'email required'
      status = false
    }
    if (password == '' || password.length < 8) {
      localErrors.password = 'password required and min 8 charactere'
      status = false
    }
    setErrors(localErrors)
    //console.log(localErrors)
    return status
  }
  const signin = async (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password,
    }
    console.log('boutton submitted')
    // if (formValidation()) {
    //   const data = {
    //     email: email,
    //     password: password,
    //   }
    try {
      const response = await userService.signin(data)
      console.log('respense=====>', response)
      localStorage.setItem('user_data', JSON.stringify(), response.data.user)
      localStorage.setItem('token', response.data.token)
      // toast.success('User login')
      setEmail('')
      setPassword('')
      //redirection
      navigate('/home')
    } catch (err) {
      console.log(err)
      // toast.error(err.response.data.message)
    }
  }
  return (
    <div className='login'>
      <Toaster />
      <div className='login-cover'></div>
      <div className='login-content'>
        <div>
          <h1>Dark space</h1>
          <p>dark space Socialmedia</p>
        </div>

        <div>
          <form onSubmit={signin}>
            <div className='form-group'>
              <label>Email</label>
              <input
                className='input'
                type='text'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email != ' ' ? (
                <div style={{ textAlign: 'left', color: 'orangered' }}>
                  {errors.email}
                </div>
              ) : (
                ''
              )}
            </div>
            <div className='form-group'>
              <label>Password</label>
              <input
                className='input'
                type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password != ' ' ? (
                <div style={{ textAlign: 'left', color: 'orangered' }}>
                  {errors.password}
                </div>
              ) : (
                ''
              )}
            </div>
            <button className='btn-signin' type='submit'>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Odkhel
