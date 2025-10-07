import React, { useState } from 'react';
import '../styles/learnMore.css'

const LearnMore = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Making cities for people, not cars.",
      subtitle: "By sharing our knowledge of the industry and real-time data we're helping to improve our cities.",
      learnMoreSubtitle: "Sharing best practices",
      learnMoreDescription: "We're able to provide insights that help local authorities make their cities more connected and liveable.",
      linkText: "Learn more"
    },
    {
      title: "Making cities for people, not cars.",
      subtitle: "By sharing our knowledge of the industry and real-time data we're helping to improve our cities.",
      learnMoreSubtitle: "Green initiatives",
      learnMoreDescription: "Our commitment to reducing carbon emissions through innovative transportation solutions.",
      linkText: "Learn more"
    },
    {
      title: "Making cities for people, not cars.",
      subtitle: "By sharing our knowledge of the industry and real-time data we're helping to improve our cities.",
      learnMoreSubtitle: "Community impact",
      learnMoreDescription: "Ensuring everyone has access to reliable and affordable transportation services.",
      linkText: "Learn more"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

 return (
    <section className="learnmore-section">
        <div className= 'learnmore-image'>
         <img src="./assets/afterservices.webp" alt="learnmore image"></img>
       </div>
       
      <div className="cities-container">
        <div className="cities-content">
        
          <div className="main-content">
            <h1 className="main-title">{slides[currentSlide].title}</h1>
            <p className="main-subtitle">{slides[currentSlide].subtitle}</p>
          </div>

          <div className="learnmore-content">
            <h3 className="learnmore-subtitle">{slides[currentSlide].learnMoreSubtitle}</h3>
            <p className="learnmore-description">{slides[currentSlide].learnMoreDescription}</p>
            <br></br>
            <a href="#" className="learn-more-link">{slides[currentSlide].linkText}</a>
          </div>

         
          <div className="navigation-container">
            
            <button className="navigation-arrow-left" onClick={prevSlide}>
              ←
            </button>

            
            <div className="dots-container">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'dot-active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>

            
            <button className="navigation-arrow-right" onClick={nextSlide}>
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;