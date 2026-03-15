import React from 'react'

export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      
      <div className="about-img">
          <img src="/images/about.jpg" alt="" />
          <span className="circle-spin"></span>
      </div>

      <div className="about-content">
          <h3>Fullstack Developer</h3>
          <p>
              Hi! I'm Bahaa Abou Zaher, a passionate new learning
              Fullstack developer. I have huge experience in IT Servers, networks,
              and support. Currently, learning main assets for Web Development to shift my career...
          </p>


        </div>
    </section>
  )
}
