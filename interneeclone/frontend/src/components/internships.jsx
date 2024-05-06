import React from 'react'
import './Home/home.css'
import cloud from './Images/Mobile App Developer.webp'
import graphic from './Images/logo-designer-working-computer-desktop.webp'
import backend from './Images/BackendDevelopment.webp';
import figma from './Images/figma.png';
import chatbot from './Images/chatbotDevelopment.webp';
import analysis from './Images/analysis.webp'


const Internships = () => {
    return (
        <div>
            <div className='internship'>
                <div class="box">
                    <img src={backend} height={320} width={394} alt="Placeholder Image" />
                    <h2>Web Development</h2>
                    <div className='divider'></div>

                    <button className='box-button'>Apply Now</button>
                </div>
                <div class="box">
                    <img src={cloud} height={320} width={394} alt="Placeholder Image" />
                    <h2>Mobile Development</h2>
                    <div className='divider'></div>

                    <button className='box-button'>Apply Now</button>
                </div>
                <div class="box">
                    <img src={graphic} height={320} width={394} alt="Placeholder Image" />
                    <h2>Graphic Design</h2>
                    <div className='divider'></div>
                    <button className='box-button'>Apply Now</button>
                </div>

            </div>
            <div className='internship'>  <div class="box">
                <img src={chatbot} height={320} width={394} alt="Placeholder Image" />
                <h2>Chatbot</h2>
                <div className='divider'></div>
                <button className='box-button'>Apply Now</button>
            </div>
                <div class="box">
                    <img src={analysis} height={320} width={394} alt="Placeholder Image" />
                    <h2>Data Analysis</h2>
                    <div className='divider'></div>
                    <button className='box-button'>Apply Now</button>
                </div>
                <div class="box">
                    <img src={figma} height={320} width={394} alt="Placeholder Image" />
                    <h2>Figma</h2>
                    <div className='divider'></div>
                    <button className='box-button'>Apply Now</button>
                </div></div>
        </div>
    )
}

export default Internships
