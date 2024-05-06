import React from 'react'
import './headerfootercss.css'
import favicon from './Images/logo.webp'
const Footer = () => {
    return (
        <div className="footer">
            <div className="col1">
                <img src={favicon} height={49} width={240} alt='eor' />

            </div>
            <div className='col2'>
                <h4>Company</h4>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms and Conditions</li>
            </div>
            <div className='col3'>
                <h4>Get Help</h4>
                <li>Training Videos</li>
                <li>Request Help</li>
            </div>
            <div className='col4'>
                <h4>Socialize with us</h4>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-whatsapp"></i></a>

                </div>

                <li>+923453191638 </li>
                <li>info@internee.pk</li>
                <li>Copyright ©2024 internee.pk Pvt Ltd.</li>
                <li>All rights reserved.</li>
            </div>
        </div>
    )
}

export default Footer
