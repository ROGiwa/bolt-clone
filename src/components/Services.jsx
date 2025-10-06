import React, { useRef } from 'react';
import '../styles/services.css'; 

const Services = () => {
  const carouselRef = useRef(null);

  const scrollCarousel = (direction) => {
    const scrollAmount = 400;
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const services = [{
      id: 'rides',
      title: 'Rides',
      description: 'Request in seconds, ride in minutes.',
      buttonText: 'Get Started',

    },
    {
      id: 'delivery',
      title: 'Delivery',
      description: 'Your favorite food, delivered fast.',
      buttonText: 'Go to Bolt Food',

    },
    {
      id: 'car-sharing',
      title: 'Car-sharing',
      description: 'High-quality car rental made easy.',
      buttonText: 'Go to Bolt Drive',
    },
    {
      id: 'groceries',
      title: 'Groceries',
      description: 'All the essentials whenever you need them.',
      buttonText: 'Go to Bolt Market',

    },
    {
      id: 'business',
      title: 'Business',
      description: 'Manage business travel for your team and clients',
      buttonText: 'Go to Bolt Food',

    },
        {
      id: 'micromobility',
      title: 'Micromobility',
      description: 'Manage business travel for your team and clients',
      buttonText: 'Go to Bolt Food',

    }
  ];

  return (
    <div className="services-section">
      <div className="services-container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            {"Products and features vary by country. Some features listed here may not be available \nin your app."}
          </p>
        </div>

        <div className="carousel-container">
          <div className="cards-carousel" ref={carouselRef}>
            {services.map((service) => (
              <div key={service.id} className={`service-card ${service.id}`}>
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <p className="card-description">{service.description}</p>
                  <button className="card-button">{service.buttonText}</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-navigation">
          <button 
            className="nav-arrow-left" 
            onClick={() => scrollCarousel('left')}
            aria-label="Previous"
          >
           {"<"}
          </button>
          <button 
            className="nav-arrow-right" 
            onClick={() => scrollCarousel('right')}
            aria-label="Next"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
