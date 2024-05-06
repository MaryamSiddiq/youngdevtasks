import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../addcourses/addcourses.css'
import axious from "axios"
const Addcourse = () => {
    const users = {

        title: '',
        code: '',
        description: '',
        instructor:'',
        capacity:'',
    }
    const [user,setUser]=useState(users);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user,[name]:value});
        console.log(user)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axious.post("http://localhost:8000/api/addcourse",user).then((response)=>{
console.log(response);
alert('successfully added');
        }).catch(error=>console.log(error));
    };

    return (
        <div className='adduser'>
            <Link to={'/'}>Back</Link>
            <form className='login-form' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
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
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Description:
                    <input
                    type='text'
                        name="description"
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
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Capacity:
                    <input
                    type='number'
                        name="capacity"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    )
}

export default Addcourse
