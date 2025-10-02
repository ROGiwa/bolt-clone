import React from 'react'
import '../styles/aboutus.css';

const AboutUs = () => {
  return (
    <section className="aboutus-section">
      
      <div className="image-container image-top">
        <img 
          src="/assets/collage.webp" 
          alt="collage-image" 
          className="top-section-image"
        />
      </div>

      
      <div className="about-container">
          <h2 className="about-label">About us</h2>
          <h1 className="about-title">
            Bolt is the first European mobility super-app.
          </h1>
          <p className="about-description">
            We're making cities for people, offering better alternatives for every 
            purpose a private car serves — including ride-hailing, shared cars, 
            scooters, and food and grocery delivery.
          </p>
          <button className="mission-button">Our mission</button>
      </div>

      
      <div className="image-container image-bottom">
        <img 
          src="/assets/aboutusphone.webp" 
          alt="Bottom section image" 
          className="bottom-section-image"
        />
      </div>
    </section>
  )
}

export default AboutUs