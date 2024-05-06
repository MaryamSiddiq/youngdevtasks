import React from 'react'
import { useState, useEffect } from 'react'
import Footer from '../footer'
import Navbar from '../navbar'
import Internships from '../internships'
import '../Home/home.css'
import img1 from '../Images/hero.webp'
import incubation from '../Images/incubation.jpg'
import nep from '../Images/nep.png'
import nic from '../Images/nic.png'
import fav from '../Images/fav.png'
import frontend from '../Images/FrontEnd.webp'
import cloud from '../Images/cloud.webp'
import graphic from '../Images/logo-designer-working-computer-desktop.webp'
import backend from '../Images/BackendDevelopment.webp';
import hack from '../Images/hack.webp';
import chatbot from '../Images/chatbotDevelopment.webp';
import task from '../Images/task.webp'
import '@fortawesome/fontawesome-free/css/all.css';
import lms from '../Images/lms.png';
import instructor from '../Images/instructor.png'
import programming from '../Images/programing.jpg'

const Home = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(3); // Initial end index (0-based)
  const [data, setData] = useState([
    {
      image: frontend,
      title: 'Frontend',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      image: cloud,
      title: 'Clloud Computing',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      image: graphic,
      title: 'Digital Marketing Internship',
      description: 'Internee.pk offers a comprehensive Digital Marketing internship that goes beyond textbooks. Gain practical experience in social media management,content creation, SEO optimization, and analytics. Work on real projects, refine your skills, and make a tangible impact',
    },
    {
      image: backend,
      title: 'Backend',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: chatbot,
      title: 'ChatBot',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: hack,
      title: 'Hacking',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: graphic,
      title: 'Graphic',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      image: backend,
      title: 'Backend',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    // Add more slides as needed
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, [startIndex, endIndex]);

  const nextSlide = () => {
    const newStartIndex = endIndex + 1;
    const newEndIndex = newStartIndex + 3; // Display next four slides
    if (newEndIndex < data.length) {
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    } else {
      // If reaching the end, wrap around to the beginning
      setStartIndex(0);
      setEndIndex(3);
    }
  };

  const prevSlide = () => {
    const newEndIndex = startIndex - 1;
    const newStartIndex = newEndIndex - 3; // Display previous four slides
    if (newStartIndex >= 0) {
      setStartIndex(newStartIndex);
      setEndIndex(newEndIndex);
    } else {
      // If reaching the beginning, wrap around to the end
      setStartIndex(data.length - 4);
      setEndIndex(data.length - 1);
    }
  };



  return (
    <div>
      <>
        <Navbar />
        <section className='section1'>
          <div className='left-col'>
            <h1>Looking for dream<br /> internship?</h1>
            <div class="text-animation">
              <h6>GET A COMPETATIVE<br /> JOB.</h6>
              <h6>ON YOUR DESIRE <br />DOMAIN</h6>
              <h6>GIVES HANDS ON <br />EXPERIENCE</h6>
            </div>
            <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>
            <div className='col-images'>
              <img src={incubation} height={80} width={240} />
              <img src={nep} height={80} width={80} />
              <img src={nic} height={70} width={100} />
            </div>
            <div className='col-buttons'>
              <button className='btn1' >Job Portal</button>
              <button className='btn2'>Internee Portal</button>
            </div>
          </div>
          <div className='right-col'>
            <img src={img1} height={640} width={680} />
          </div>
        </section>

        <section className='section2'>
          <img src={fav} height={100} width={100} />
          <h1>Who is internee.pk?</h1>
          <p>The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.</p>
          <p>👇 Click Below and grab your internship now 👇
          </p>
        </section>
        <section className='section3'>
          <div className="carousel-wrapper">
            <div className="card-carousel">
              {data.slice(startIndex, endIndex + 1).map((item, index) => (
                <div className="card" key={index}>
                  <img src={item.image} alt={item.title} />
                  <div className="card-content">
                    <h3 className="card-title">{item.title}</h3>
                    <p className="card-description">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className='center'>
              <button onClick={prevSlide} className='btn2'>Previous</button>
              <button onClick={nextSlide} className='btn2'>Next</button>
            </div>
          </div>
        </section>
        <section className='intern-content'>
          <div className='left-content'>
            <p><strong>Internships</strong> every months Introducing Internee.pk, the ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
            </p>
            <strong><p>👇 Click Below and grab your internship now 👇

</p></strong>
          </div>
        </section>
        <Internships />
        <section className='section4'>
          <div className='col-img'>
            <img className='moving-image' src={task} height={600} width={720} />
          </div>
          <div className='col-content'>
            <h1>Our own task portal</h1>
            <h2>Manage Project Via Own <br />Task Portal</h2>
            <p>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</p>
            <div className='row1'>
              <div class="icon-box">
                <i class="fa-regular fa-address-book" ></i>
                <p class="description"><strong>Hands on Projects</strong> we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.
                </p>
              </div>

              <div class="icon-box">
                <i class="fa-brands fa-r-project"></i>
                <p class="description"><strong>How to represent yourself</strong> More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.

                </p>

              </div>
            </div>
            <div className='row1'>
              <div class="icon-box">
                <i class="fa-solid fa-section"></i>
                <p class="description"><strong>Easy to understand</strong> Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.
                </p>
              </div>

              <div class="icon-box">
                <i class="fa-solid fa-envelope"></i>
                <p className='description'><strong>SDLC Techniques</strong> Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.</p>

              </div>
            </div>
          </div>
        </section>
        <section className='section6'>
          <div className='col-content'>
            <h1>Our LMS</h1>
            <h2>Guided Tutorials in Learning Management System</h2>
            <p>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</p>
            <div className='row1'>
              <div class="icon-box">
                <i class="fa-regular fa-address-book" ></i>
                <p class="description"><strong>Hands on Projects</strong> we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.
                </p>
              </div>

              <div class="icon-box">
                <i class="fa-brands fa-r-project"></i>
                <p class="description"><strong>How to represent yourself</strong> More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.

                </p>

              </div>
            </div>
            <div className='row1'>
              <div class="icon-box">
                <i class="fa-solid fa-section"></i>
                <p class="description"><strong>Easy to understand</strong> Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.
                </p>
              </div>

              <div class="icon-box">
                <i class="fa-solid fa-envelope"></i>
                <p className='description'><strong>SDLC Techniques</strong> Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.</p>

              </div>
            </div>
          </div>
          <div className='col-img'>
            <img className='moving-image' src={lms} height={600} width={720} />
          </div>

        </section>
        <section className='section4'>
          <div className='col-img'>
            <img className='moving-image' src={instructor} height={600} width={720} />
          </div>
          <div className='col-content'>
            <h1>Are you Tech Instructor or Content Creator?</h1>
            <h2>Create Courses In Local Language & Generate Income</h2>
            <p>Welcome to internee.pk task portal. Where Tasks Transform Into Skills</p>
            <div className='row1'>
              <div class="icon-box">
                <i class="fa-regular fa-address-book" ></i>
                <p class="description"><strong>Hands on Projects</strong> we believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.
                </p>
              </div>

              <div class="icon-box">
                <i class="fa-brands fa-r-project"></i>
                <p class="description"><strong>How to represent yourself</strong> More than just completing tasks, It empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.

                </p>

              </div>
            </div>
            <div className='row1'>
              <div class="icon-box">
                <i class="fa-solid fa-section"></i>
                <p class="description"><strong>Easy to understand</strong> Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone. Whether you're a seasoned professional or a beginner.
                </p>
              </div>

              <div class="icon-box">
                <i class="fa-solid fa-envelope"></i>
                <p className='description'><strong>SDLC Techniques</strong> Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.</p>

              </div>
            </div>
          </div>
        </section>
        <section className='section7'>
          <div class="timeline">
            <div class="timeline-item">
              <div class="timeline-box"></div>
              <div class="timeline-content">
                <h2>5500+ Students already registered</h2>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-box"></div>
              <div class="timeline-content">
                <h2>Task based projects that based on hands on experience</h2>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-box"></div>
              <div class="timeline-content">
                <h2>Massive Courses with high-quality videos on LMS</h2>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-box"></div>
              <div class="timeline-content">
                <h2>Empowering youth towards IT revolution & technology</h2>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-box"></div>
              <div class="timeline-content">
                <h2>Hands on Experience via Virtual internship</h2>
              </div>
            </div>
            <div class="timeline-item">
              <div class="timeline-box"></div>
              <div class="timeline-content">
                <h2>Complete your task and get market competent job</h2>
              </div>
            </div>
          </div>
          <div className='colimg'>
            <img src={programming} height={460} width={560} />
          </div>
        </section>
        <Footer />
      </>
    </div>
  )
}

export default Home
