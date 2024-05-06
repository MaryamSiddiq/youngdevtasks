import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './userhome.css';
import axious from 'axios';


const Enroll = () => {

  const users = {

    title: '',
    code: '',
    username: '',
    instructor: '',
  }
  const [user, setUser] = useState(users);
  const navigate=useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(user)
  }
  const title = localStorage.getItem('title');
  const code = localStorage.getItem('code');
  const username = localStorage.getItem('username');
  const instructor = localStorage.getItem('instructor');
  const email = localStorage.getItem('email');
  const capacity = localStorage.getItem('capacity');


  const handleSubmit = async (e) => {
    e.preventDefault();
    await axious.post("http://localhost:8000/api/enroll", user).then((response) => {
      console.log(response);
      alert('successfully added');
      navigate('/enroll')
    }).catch(error => console.log(error));
  };
  return (
    <div>     
      <form className='login-form' onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            
          />
        </label>
      </div>
      <div className='form-group'>
        <label>
          Your Name:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}

            
          />
        </label>
      </div>
      <div className='form-group'>
        <label>
          Code:
          <input
            type="text"
            name="code"
            value={code}
            onChange={handleChange}


          />
        </label>
      </div>

      <div className='form-group'>
        <label>
          Instructor:
          <input
            type='text'
            name="instructor"
            value={instructor}
            onChange={handleChange}


          />
        </label>
      </div>
      <div>
        <a href='/userhome'><button type="submit">Confirm Enroll</button></a>
      </div>
    </form></div>
  );
};

export default Enroll;
