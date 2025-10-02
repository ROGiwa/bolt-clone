import React from 'react';
import '../styles/newsandupdates.css'

const NewsandUpdates = () => {
  const newsArticles = [
    {
      id: 1,
      date: '6/7/2025',
      title: 'Bolt and Driver Technologies Inc. introduce a convenient...',
      description: 'Bolt has teamed up with Driver Technologies to offer an affordable dash cam app that boosts safety and peace of mind — no hardware required.',
      image: '/assets/newsandupdate1.png',
      featured: true
    },
    {
      id: 2,
      date: '6/7/2025',
      title: 'Cover rides for your loved ones with Family Profiles',
      image: '/assets/newsandupdate2.png',
      featured: false
    },
    {
      id: 3,
      date: '18/5/2025',
      title: 'Bolt Ambassador Program Nigeria – Terms and...',
      image: '/assets/newsandupdate3.png',
      featured: false
    },
    {
      id: 4,
      date: '12/2/2025',
      title: 'Breaking stereotypes: Meet a resilient female driver...',
      image: '/assets/newsandupdate4.jpeg',
      featured: false
    }
  ];

  return (
    <section className="news-section">
      <div className="container">
        
        <div className="news-header">
          <h2 className="news-title">News and updates</h2>
          <button className="view-all-button">
            View all
            <span className="diagonal-arrow">↗</span>
          </button>
        </div>

        
        <div className="news-content">
          
          <div className="featured-box">
            <div className="featured-image">
              <img 
                src={newsArticles[0].image} 
                alt="Featured news"
                className="main-article-image"
              />
            </div>
            <div className="featured-text">
              <span className="featured-date">{newsArticles[0].date}</span>
              <h3 className="featured-title">{newsArticles[0].title}</h3>
              <p className="featured-description">{newsArticles[0].description}</p>
            </div>
          </div>

          
          <div className="side-box">
            {newsArticles.slice(1).map((article) => (
              <div key={article.id} className="side-article-item">
                <div className="small-image">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="article-thumb"
                  />
                </div>
                <div className="article-text">
                  <h4 className="article-title">{article.title}</h4>
                  <span className="article-date">{article.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};

export default NewsandUpdates;

