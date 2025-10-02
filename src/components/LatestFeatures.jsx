import React, { useState } from 'react';
import '../styles/latestFeatures.css';

const LatestFeatures = () => {
  const [activeTab, setActiveTab] = useState('rides');
  return (
    <div className="main-container">
      
      <div className="features-container">
        <div className="features-content">
          <p className="features-label">Latest features</p>
          <h2 className="features-title">Book a ride in advance</h2>
          <p className="features-description">
            Planning a trip? Schedule a Bolt ride in advance for even more convenient 
            airport transfers, important meetings, or any occasion that requires 
            punctuality. Simply enter your details and secure your ride up to 90 days 
            ahead.
          </p>
        </div>
      </div>

      
      <div className="image-container">
        <img 
          src="/assets/downloadapps.webp" 
          alt="Bolt ride booking feature" 
          className="feature-image"
        />
      </div>

      
    <div className="download-container">
     <div className="download-content">
        <div className="download-header">
          <h2 className="download-title">Download our apps</h2>
          <p className="download-subtitle">Available for iOS and Android devices.</p>
        </div>

    <div className="download-body">
      <div className="image-placeholder">
        <img 
          src="/assets/realphone.webp" 
          alt="Bolt app showcase" 
          className="showcase-image"
        />
      </div>
      
      <div className="download-text">
        <div className="app-section">
          <div className="app-tabs">
            <span 
              className={`app-tab ${activeTab === 'rides' ? 'active' : ''}`}
              onClick={() => setActiveTab('rides')}
            >
              Rides
            </span>
            <span 
              className={`app-tab ${activeTab === 'delivery' ? 'active' : ''}`}
              onClick={() => setActiveTab('delivery')}
            >
              Delivery
            </span>
          </div>
          
          {activeTab === 'rides' ? (
            <>
              <h3 className="app-title">The fast, affordable way to ride.</h3>
              <p className="app-description">Available for iOS and Android devices.</p>
              <button className="download-button">Get Bolt</button>
            </>
          ) : (
            <>
              <h3 className="app-title">The food you love, delivered fast!</h3>
              <p className="app-description">Available for iOS and Android devices.</p>
              <button className="download-button">Get Bolt Food</button>
            </>
          )}
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
  
}

export default LatestFeatures;