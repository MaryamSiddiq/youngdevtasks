import React, { useState } from 'react'
import Signup from '../Signup/signup'
import '../Login/login.css'
import { Link, useNavigate } from 'react-router-dom';


import axious from "axios"

const Login = () => {
  const navigate = useNavigate();
  const users = {
    email: '',
    password: '',
    username:''
  }
  const [user, setUser] = useState(users);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });

    console.log(user.password)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axious.post("http://localhost:8000/api/login", user);
      console.log(response);
      if (response.data === 'Admin') {
        // If the user is an admin, navigate to the admin page
        
        navigate('/adminhome');

      } else if (response.data === 'User') {
        // If the user is a regular user, navigate to the user page
        console.log(user.email);
        localStorage.setItem('myData', user.email);
        localStorage.setItem('username', user.username);
       navigate('/userhome');
      } else {
        // Handle unexpected response
        console.error('Unexpected response:', response.data);
      }
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
      <div> <h2>Login</h2></div>
      <form onSubmit={handleSubmit}>
        <div>
    
        <input
            type="text"
            name="username"
            placeholder='Username'

            required
            onChange={handleChange}

          />
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
        <button type="submit">Login</button>

      </form>
      <a href='/signup'><button>SignUp</button></a>



    </div>
  )
}

export default Login
