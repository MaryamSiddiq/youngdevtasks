import React, { useState } from 'react'
import Signup from '../Signup/signup'
import '../Login/login.css'
import { Link, useNavigate } from 'react-router-dom';
import axious from "axios"
import logo from '../Images/logo.webp'

const Login = () => {
  const navigate = useNavigate();
  const users = {
    email: '',
    password: '',
  }
  const [user, setUser] = useState(users);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axious.post("http://localhost:8000/api/login", user);
      console.log(response);
    navigate('/');
    } catch (error) {
      console.error("Error:", error.message);
      alert("Username or password is not correct");
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
        alert(error);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
    }
  };


  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt="Logo" height={60} width={210} />
      </div>
      <form onSubmit={handleSubmit}>
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
        <button className='btn' type="submit">Login</button>

      </form>
      <a href='/signup' ><button className='btn'>SignUp</button></a>



    </div>
  )
}

export default Login
