import React from 'react';
import '../styles/earnSection.css';


  const EarnSection = () => {
  const earningSections = [
    {
      id: 1,
      category: "Earn money as a Bolt driver",
      title: "Drive and earn money",
      description: "Our 200+ million riders will send you plenty of ride requests. When demand is high, you can earn even more.",
      buttonText: "Register to drive",
      image: "./assets/grid1.webp",
      alt: "Bolt driver in car with smartphone",
      imagePosition: "left"
    },
    {
      id: 2,
      category: "Become a Bolt courier partner",
      title: "Earn with every delivery",
      description: "You decide when and how often you deliver — weekdays, evenings, weekends, or just the occasional hour — it's up to you.",
      buttonText: "Register as a courier",
      image: "./assets/grid2.webp",
      alt: "Bolt Food delivery courier with green bag",
      imagePosition: "right"
    },
    {
      id: 3,
      category: "Increase earnings as a merchant",
      title: "Increase your sales and reach new customers",
      description: "Millions of our users are ordering food or goods from restaurants and stores just like yours.",
      buttonText: "Register with Bolt Food",
      image: "./assets/grid3.webp",
      alt: "Server with a phone",
      imagePosition: "left"
    },
    {
      id: 4,
      category: "Join Bolt with your fleet and earn more",
      title: "Grow your transport business",
      description: "As a fleet owner and Bolt partner, you can manage your assets from one easy-to-use dashboard and grow your transport business.",
      buttonText: "Learn about fleet",
      image: "./assets/grid4.webp",
      alt: "Lady in a car driving",
      imagePosition: "right"
    }
  ];

  return (
    <section className="earn-section">
      <div className="earn-section-container">
        <div className="earnsection-header">
          <h2 className="earnsection-title">Earn money with Bolt</h2>
          <p className="earnsection-subtitle">
            Join over 4.5 million partners worldwide that earn with Bolt. For drivers, couriers, merchants, and fleet owners looking for new ways to boost revenue.
          </p>
        </div>

        <div className="earn-grid">
          {earningSections.map((section) => (
            <div 
              key={section.id} 
              className={`earn-item ${section.imagePosition === 'right' ? 'earn-item-reverse' : ''}`}
            >
              
              <div className="earn-image">
                <img 
                  src={section.image} 
                  alt={section.alt}
                  className="earn-img"
                />
              </div>

              
              <div className="earn-content">
                <p className="earn-category">{section.category}</p>
                <h3 className="earn-title">{section.title}</h3>
                <p className="earn-description">{section.description}</p>
                <button className="earn-button">{section.buttonText}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default EarnSection;