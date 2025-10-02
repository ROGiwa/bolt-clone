import React from 'react';
import '../styles/hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className='hero-content'>
      <h1>Riding is the new driving</h1>
      <p>
        The freedom to go anywhere without paying for parking, fuel, or maintenance. All you need is an app and a destination.
      </p>
      </div>
      <div className="hero-buttons">
        <button className="get-bolt">Get Bolt</button>
        <button className="earn-bolt">Earn with Bolt</button>
      </div>
      <div className= 'hero-image'>
        <img src="./assets/boltpic1.webp" alt="Hero image"></img>
      </div>
    </section>
  );
}
export default Hero;