import React from 'react';
import Slider from 'react-slick';
import './PopularCategories.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const categories = {
  En: [
    { image: '/8D-exaple.png', label: '8D Finished volume lashes' },
    { image: '/8D-exaple.png', label: '14D finished volume lashes' },
    { image: '/8D-exaple.png', label: '3D finished volume lashes' },
  ],
  Se: [
    { image: '/8D-exaple.png', label: '8D Färdiga volymfransar' },
    { image: '/8D-exaple.png', label: '14D färdiga volymfransar' },
    { image: '/8D-exaple.png', label: '3D färdiga volymfransar' },
  ]
};

const PopularCategories = ({ language }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  

  return (
    <section className="popular-categories">
      <h2>{language === 'En' ? 'Popular Categories' : 'Populära Kategorier'}</h2>
      <Slider {...settings}>
        {categories[language].map((cat, index) => (
          <div key={index} className="category-card">
            <img src={cat.image} alt={cat.label} />
            <p>{cat.label}</p>
          </div>
        ))}
      </Slider>
      <a href="index.html" className="view-all">
        <span className="view-all-text">{language === 'En' ? 'View All' : 'Visa Alla'}</span>
        <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.790039 10H22.79M22.79 10L13.6866 1M22.79 10L13.6866 19" stroke="black" />
        </svg>
      </a>
    </section>
  );
};

export default PopularCategories;