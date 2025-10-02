import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesGrid from './components/Services';
import LearnMore from './components/LearnMore';
import EarnSection from './components/EarnSection';
import LatestFeatures from './components/LatestFeatures';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import NewsandUpdates from './components/NewsandUpdates';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesGrid />
      <LearnMore />
      <AboutUs />
      <EarnSection />
      <LatestFeatures />
      <NewsandUpdates />
      <Footer />
    </>
  );
}

export default App;
