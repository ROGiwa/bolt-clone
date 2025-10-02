import React from 'react';
import '../styles/footer.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";




const Footer = () => {
  const footerSections = {
    products: [
      'Rides',
      'Scooters',
      'E-Bikes',
      'Bolt Drive',
      'Bolt Food',
      'Bolt Market',
      'Bolt Business',
      'Bolt Plus'
    ],
    earn: [
      'Bolt Drivers',
      'Bolt Couriers',
      'Bolt Food Merchants',
      'Bolt Fleets',
      'Bolt Franchise'
    ],
    company: [
      'About Bolt',
      'Careers',
      'Sustainability',
      'Blog',
      'Press',
      'Brand Guidelines'
    ],
    support: [
      'Riders',
      'Drivers',
      'Bolt Food',
      'Couriers',
      'Fleets',
      'Restaurants',
      'Bolt Business'
    ],
    safety: [
      'Rider safety',
      'Driver safety',
      'Scooter safety',
      'Safety lab'
    ],
    locations: [
      'Our cities',
      'Our airports'
    ],
    citySolutions: [
      'Our mission',
      'Charging docks'
    ]
  };

  const socialLinks = [
      { name: "Facebook", icon: <FaFacebook />, url: "#" },
      { name: "X", icon: <FaXTwitter />, url: "#" },
      { name: "Instagram", icon: <FaInstagram />, url: "#" },
      { name: "Linkedin", icon: <FaLinkedin />, url: "#" },
      { name: "Tiktok", icon: <FaTiktok />, url: "#" }, 
  ]

  const legalLinks = [
    'Suppliers',
    'Terms and Conditions',
    'Privacy',
    'Cookies',
    'Security'
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-main-nav">
          <div className="footer-column">
            <h3 className="footer-column-title">Products</h3>
            <ul className="footer-links">
              {footerSections.products.map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Earn</h3>
            <ul className="footer-links">
              {footerSections.earn.map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Company</h3>
            <ul className="footer-links">
              {footerSections.company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Support</h3>
            <ul className="footer-links">
              {footerSections.support.map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Safety</h3>
            <ul className="footer-links">
              {footerSections.safety.map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">Locations</h3>
            <ul className="footer-links">
              {footerSections.locations.map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-column-title">City solutions</h3>
            <ul className="footer-links">
              {footerSections.citySolutions.map((item, index) => (
                <li key={index}>
                  <a href="#" className="footer-link">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="footer-divider"></div>

       
        <div className="footer-middle">
          <div className="language-section">
            <img src="./assets/ngr.svg" alt="Nigerian flag" className="flag-icon" />
            <span className="language-text">EN</span>
          </div>
          <div className="app-buttons">
            <button className="app-download-btn">Get Bolt</button>
            <button className="app-download-btn">Get Bolt Food</button>
          </div>
        </div>

        
        <div className="footer-bottom">
          <div className="footer-brand-social">
              
                <img 
                  src="./assets/boltlogowhite.svg" 
                  alt="Bolt Logo" 
                  className="bolt-icon" 
                />
              
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      title={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
            </div>
          
          <div className="footer-legal">
            {legalLinks.map((link, index) => (
              <a key={index} href="#" className="legal-link">{link}</a>
            ))}
            <span className="copyright">© 2025 Bolt Technology OÜ</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;