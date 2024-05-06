import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './userhome.css';

const Userhome = () => {
  const [users, setUsers] = useState([]);
  const receivedemail = localStorage.getItem('myData');
  const username = localStorage.getItem('username');

  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:8000/api/fetchcourses');
      setUsers(response.data);

    } catch (error) {
      console.error('Error fetching users:', error.response ? error.response.data : error);
    }
  };

  
  const goToReceiverPage = (userData) => {
    alert(userData.title)
    localStorage.setItem('title', userData.title);
    localStorage.setItem('code', userData.code);
    localStorage.setItem('instructor', userData.instructor);
    localStorage.setItem('email', receivedemail);
    localStorage.setItem('capacity', userData.capacity);
    localStorage.setItem('username', username);



  };

  return (
    <div>
      <header>
        <div className="homecontainer">
          <div className="right-text">
            <p><span>U</span>ser <span>P</span>ortal</p>
          </div>
          <div className="left-menu">
            <nav>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/addcourse">Check Enrolled courses</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">FAQS</a></li>
                <li>
                  <div>
                    <button className='button' onClick={openDialog}>Profile</button>
                    {isOpen && (
                      <div className="popup-overlay" onClick={closeDialog}>
                        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                          <h2>User Detail</h2>
                          <h4>Email:   <span>{receivedemail}</span></h4>
                          <h4>Username:  <span>{username}</span></h4>

                          <button className="close-button" onClick={closeDialog}>Close</button>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section id="sectionone">

        {/* Displaying the password is generally a bad practice but shown here for demonstration */}
      </section>
      <table className='table'>
        <h1>All Courses</h1>
        <tbody className='tablebody'>
          {users.map(user => (
            <tr key={user._id}>
              <td>
                {/* 
{user.pic && <img src={user.pic} alt="Department" height={200} width={300}/>} 
*/}
                <h2>Title: {user.title}</h2>
                <p><b>Course Code:  </b>{user.code}</p>
                <p><b>Course Description:  </b>{user.description}</p>
                <p><b>Course Instructor:  </b>{user.instructor}</p>
                <p><b>Course Capacity:  </b>{user.capacity}</p>
                <a href='/Enroll' onClick={() => goToReceiverPage(user)}><button>Enroll</button></a>

              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default Userhome
