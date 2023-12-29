import React from 'react'

const HeroSection = () =>{
  return (
    <section id='heroSection' className='hero--section'>
       <div className="hero--section--content-box">
          <div className="hero--section-content">
             <p className="section-title">
                Hey, i'm Sam
             </p>
             <h1 className="hero--section--title">
                <span className="hero--section--title--color">
                    Full Stack
                    <br />
                    Developer
                </span>
             </h1>
             <p className="hero--section--desription">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                <br /> Eius, quidem optio! Cupiditate, et suscipit.
             </p>
          </div>
          <button className='btn btn-primary'>Get In Touch</button>
       </div>
       <div className="hero--section--img">
        <img src="./img/Sam.jpg" alt="Hero Section" />
       </div>
    </section>
  )
}

export default HeroSection