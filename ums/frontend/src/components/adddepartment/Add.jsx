import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import './addstyle.css'
import axious from "axios"
const Add = () => {
    const users = {

        pic: '',
        dname: '',
        message: ''
    }
    const [user,setUser]=useState(users);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({...user,[name]:value});
        console.log(user)
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axious.post("http://localhost:8000/api/createdepartment",user).then((response)=>{
console.log(response);
alert('successfully added')
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
                        name="dname"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className='form-group'> 
                <label>
                    Image:
                    <input
                        type="file"
                        name="pic"
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div className='form-group'>
                <label>
                    Description:
                    Image:
                    <input
                        name="message"
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

export default Add
