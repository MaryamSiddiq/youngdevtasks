import React , { useState } from 'react'
import '../Signup/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axious from "axios"
import logo from '../Images/logo.webp'

const Signup = () => {
  const users = {
    username: '',
    email: '',
    password: '',
    role:''
  }
  const [user, setUser] = useState(users);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user)
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    axious.post("http://localhost:8000/api/signup", user).then((response) => {
      console.log(response);
alert('successfully added');
      navigate('/login')

    }).catch(error => alert(error));
  }
  return (
    <div className='container'>
    <div className='logo'>
        <img src={logo} alt="Logo" height={60} width={210} />
      </div>
      <form  onSubmit={handleSubmit}>
        <div>
     
          <input
            type="text"
            name="username"
            placeholder='Username'
            required
            onChange={handleChange}
          />
        </div>
        <div>
       
          <input
            type="email"
            name="email"
            placeholder='Email'
            required
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder='Password'
            required
            onChange={handleChange}
          />
        </div>
        <button type="submit" className='btn'>SignUp</button>
      </form>
    </div>
  )
}

export default Signup
