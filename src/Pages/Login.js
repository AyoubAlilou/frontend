import React, { useState } from 'react'
import userService from '../Services/userService'
import toast, { Toaster } from 'react-hot-toast'
import NavBar from '../Components/NavBar'
const Login = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [bio, setBio] = useState('')
  const [birthdate, setBirthdate] = useState('')
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
    if (firstname == '') {
      localErrors.firstname = 'Firstname required'
      status = false
    }
    if (lastname == '') {
      localErrors.lastname = 'lastname required'
      status = false
    }
    if (email == '') {
      localErrors.lastname = 'lastname required'
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
  //const [picture, setPicture] = useState('')
  const register = async (e) => {
    e.preventDefault()
    console.log('boutton submitted')
    console.log('data', firstname, lastname, email, password, bio, birthdate)
    if (formValidation()) {
      //form valid

      const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
        bio: bio,
        birthdate: birthdate,
      }
      try {
        const response = await userService.register(data)
        console.log('respense=====>', response)
        toast.success('User Successfully created!')
        setFirstname('')
        setLastname('')
        setEmail('')
        setPassword('')
      } catch (err) {
        console.log(err)
        toast.error('failed created!')
      }
    } else {
      console.log('form invalid')
    }
  }
  return (
    <div className='register'>
      <Toaster />
      <div className='register-cover'></div>
      <div className='register-content'>
        <div>
          <h1>DarkSpace</h1>
          <p>Socialmedia application</p>
          <div>
            <form onSubmit={register}>
              <div className='form-group'>
                <label>Firstname</label>
                <input
                  className='input'
                  type='text'
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
                {errors.firstname != ' ' ? (
                  <div style={{ textAlign: 'left', color: 'orangered' }}>
                    {errors.firstname}
                  </div>
                ) : (
                  ''
                )}
              </div>
              <div className='form-group'>
                <label>Lastname</label>
                <input
                  className='input'
                  type='text'
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />

                {errors.lastname != ' ' ? (
                  <div style={{ textAlign: 'left', color: 'orangered' }}>
                    {errors.lastname}
                  </div>
                ) : (
                  ''
                )}
              </div>
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

              <div className='form-group'>
                <label>Bio</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                ></textarea>
              </div>
              <div className='form-group'>
                <label>Birthdate</label>
                <input
                  className='input'
                  type='date'
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
              <button className='btn-signup' type='submit'>
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Login
