import React from 'react'
import '../contact/contact.css'
import Navbar from '../navbar'
import Footer from '../footer'
const Contact = () => {
  return (
    <div>
        <Navbar/>
      <section id="sectimeline">
   <div class="timeline-container">
    <div class="timeline">
       <div class="timeline-item">
        <div class="timeline-content">
          <h3>7k+ Internship Provided</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, cumque magnam? Sequi, cupiditate quibusdam alias illum sed esse ad dignissimos libero sunt, quisquam numquam aliquam? Voluptas, accusamus omnis?</p>
        </div>
      </div>
       <div class="timeline-item">
        <div class="timeline-content">
          <h3>15k+ Linkedin Family</h3>
          <p>Our LinkedIn community has surpassed 15,000 members, comprising professionals like yourself who are driving innovation and growth in their respective industries</p>
        </div>
      </div>
       <div class="timeline-item">
        <div class="timeline-content">
          <h3>19 Courses on LMS</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-content">
          <h3>15 Companies Onboarded</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi vero quisquam, rem assumenda similique voluptas distinctio, iste est hic eveniet debitis ut ducimus beatae id? Quam culpa deleniti officiis autem?</p>
        </div>
      </div>
    </div>
  </div>

</section>
<Footer/>
    </div>
  )
}

export default Contact
