import React, { useState } from 'react';
import '../styles/navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('products');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredTab, setHoveredTab] = useState(null);

  const menuTabs = {
    products: {
      title: 'Products',
      columns: [
        { items: ['Rides', 'Rider safety', 'Become a driver'] },
        { items: ['Bolt Drive', 'FAQ', 'Report a vehicle'] },
        { items: ['Trotinete', 'Scooter safety', 'Report an issue', 'Safety lab'] },
        { items: ['Bolt Market', 'Become a courier', 'Add a restaurant or store'] },
        { items: ['Bolt Food', 'Become a courier', 'Add a restaurant or store'] },
        { items: ['Bolt Drive', 'FAQ', 'Report a vehicle'] },
        { items: ['Bolt Business', 'Benefits', 'Work profile', 'Products'] },
        { items: ['E-bikes', 'Safety lab', 'Report an issue', 'FAQ'] },
        { items: ['Bolt Plus', 'Benefits', 'How to join', 'FAQ'] }
      ]
    },
    earnWithBolt: {
      title: 'Earn with Bolt',
      columns: [
        { items: ['Drivers','Become a driver', 'How it works', 'FAQ', 'Driver safety'] },
        { items: ['Couriers','Become a courier', 'How it works', 'FAQ'] },
        { items: ['Bolt Food Merchants','Add a restaurant or store'] },
        { items: ['Fleets', 'Sign up as a fleet owner'] },
        { items: ['Franchises','About Bolt Franchise'] }
      ]
    },
    company: {
      title: 'Company',
      columns: [
        { items: ['Careers', 'Jobs', 'Life at Bolt', 'Teams', 'Locations', 'Diversity and Inclusion'] },
        { items: ['About Bolt', 'Sustainability at Bolt', 'Project Zero', 'Bolt Environmental Policy', "Bolt's Mission"] },
        { items: ['Blog', 'News', 'Campaigns', 'For passengers', 'For drivers', 'For couriers', 'Bolt Business', 'Bolt Food', 'Bolt Drive'] },
        { items: ['Press', 'Brand Guidelines'] }
      ]
    },
    safety: {
      title: 'Safety',
      columns: [
        { items: ['Safety','Driver safety', 'Rider safety', 'Scooter safety'] }
      ]
    },
    support: {
      title: 'Support',
      columns: [
        { items: ['Blog', 'News', 'Campaigns', 'For passengers', 'For drivers', 'For couriers', 'Bolt Business', 'Bolt Food', 'Bolt Drive'] }
      ]
    },
    cities: {
      title: 'Cities',
      columns: [
        { items: ['Our cities', 'Our airports', 'City solutions'] }
      ]
    }
  };

  const quickLinks = [
    { icon: '👤', title: 'Become a driver', subtitle: 'Make money on your terms' },
    { icon: '🚴', title: 'Become a courier', subtitle: 'Deliver food and get paid weekly' },
    { icon: '🍽️', title: 'Add a restaurant or store', subtitle: 'Reach more customers and increase earnings' },
    { icon: '🚗', title: 'Sign up as a fleet owner', subtitle: 'Add your fleet to Bolt and boost your income' },
    { icon: '💼', title: 'Bolt Business', subtitle: 'Bolt products and services scaled-up for your business' }
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
              <img 
                src="./assets/boltlogo.svg" 
                alt="Bolt Logo" 
                className="navbar-icon" 
              />
            </div>
          <div className="navbar-right">
            <div className="language-selector">
              <img src="./assets/ngr.svg" alt="Nigerian flag" className="navbar-flag-icon" />
              <span className="lang-text">EN</span>
            </div>
            <a href="#" className="support-link">Support</a>
            <button className="register-button">Register</button>
            <button 
              className={`hamburger ${isMenuOpen ? 'hamburger-open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <span className="close-icon">✕</span>
              ) : (
                <>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                  <span className="hamburger-line"></span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="menu-dropdown">
          <div className="menu-container">
        
            <div className="menu-tabs">
              {Object.keys(menuTabs).map((tabKey) => (
                <button
                  key={tabKey}
                  className={`menu-tab ${activeTab === tabKey ? 'menu-tab-active' : ''} ${hoveredTab === tabKey ? 'menu-tab-hover' : ''}`}
                  onClick={() => handleTabClick(tabKey)}
                  onMouseEnter={() => setHoveredTab(tabKey)}
                  onMouseLeave={() => setHoveredTab(null)}
                >
                  {menuTabs[tabKey].title}
                </button>
              ))}
            </div>

            <div className="menu-content-wrapper">
            
              <div className="menu-main">
                {menuTabs[activeTab].columns.map((column, colIndex) => (
                  <div key={colIndex} className="menu-column">
                    <ul className="menu-list">
                      {column.items.map((item, index) => (
                        <li 
                          key={index}
                          className="menu-item"
                          onMouseEnter={() => setHoveredItem(`${activeTab}-${colIndex}-${index}`)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <a href="#" className="menu-link">
                            {item}
                            {hoveredItem === `${activeTab}-${colIndex}-${index}` && (
                              <span className="arrow-icon">→</span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            
              <div className="menu-sidebar">
                {quickLinks.map((link, index) => (
                  <div 
                    key={index} 
                    className="quick-link"
                    onMouseEnter={() => setHoveredItem(`quick-${index}`)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div className="quick-link-icon">{link.icon}</div>
                    <div className="quick-link-content">
                      <h3 className="quick-link-title">{link.title}</h3>
                      <p className="quick-link-subtitle">{link.subtitle}</p>
                    </div>
                    <span className="quick-link-arrow">
                      {hoveredItem === `quick-${index}` ? '→' : '›'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar;