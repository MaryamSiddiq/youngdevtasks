import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../adminhome/adminhome.css';

const Adminhome = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/api/fetch');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error.response ? error.response.data : error);
        }
    };

    return (
        <div>
            <header>
                <div className="homecontainer">
                    <div className="right-text">
                        <p><span>A</span>dmin <span>P</span>ortal</p>
                    </div>
                    <div className="left-menu">
                        <nav>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/add">Add Department</a></li>
                                <li><a href="/addcourse">Add Course</a></li>
                                <li><a href="/">Services</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
            <section id="sectionone">
            </section>
            <table className='table'>
                <h1>Department Information</h1>
                <tbody className='tablebody'>
                    {users.map(user => (
                        <tr key={user._id}>
                            <td>
                                {/* 
{user.pic && <img src={user.pic} alt="Department" height={200} width={300}/>} 
*/}
                                <h2>{user.dname}</h2>
                                <p>{user.message}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Adminhome;
