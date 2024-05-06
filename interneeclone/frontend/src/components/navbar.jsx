import React from 'react'
import './headerfootercss.css'
import favIcon from './Images/logo.webp';

const Navbar = () => {
  return (
    <div className='header'>
      <div className='logo'>
      <img src={favIcon} alt="Logo" height={40} width={210}/>
      </div>
      <div className='menuitems'>
        <ul>
            <a><li>Internships</li></a>
            <a><li>Company Collaborations</li></a>
            <a href='/contactus'><li>Contact Us</li></a>
            <a href='/login'><li><button className='button1'>Job Portal</button></li></a>
            <a href='/login'><li><button className='button2'>Internee Portal</button></li></a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
