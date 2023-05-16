import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Register = () => {
  
  const [input, setInput] = useState({
    username:"",
    email:"",
    password:""

  })

  const handleChange = e => {
    setInput(prev=>({...prev, [e.target.name]: e.target.value}))

  }

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await axios.post("/auth/register", input)
    console.log(res)


  }

  console.log(input)
  return (
    <div className='auth'>
        <h1>Register</h1>
        <form>
            <input type='text' placeholder='Username' name='username' onChange={handleChange} />
            <input type='email' placeholder='Email' name='email' onChange={handleChange}/>
            <input type='password' placeholder='Password' name='password' onChange={handleChange}/>
            <button onClick={handleSubmit} className='login-btn'>Register</button>
            <p>This is an error</p>
    
            <span>Do you have an account?<Link to ='/login'>Login</Link></span>
        </form>
    </div>
  )
}

export default Register