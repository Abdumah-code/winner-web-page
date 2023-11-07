import React from 'react';
import Slider from 'react-slick';
import './IntroSection.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IntroSection = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
  };


  return (
    <div className="intro-section">
      <div className="intro-bg">
        <Slider {...settings}>
          <div>
            <img src="/wow.jpg" alt="Lash Studio Background 1" />
          </div>
          <div>
            <img src="/Rec.png" alt="Lash Studio Background 2" />
          </div>
          <div>
            <img src="/off.jpg" alt="Lash Studio Background 3" />
          </div>
        </Slider>
      </div>
      <div className="intro-content">
      <h2 className="brand-name">Winnir</h2>
        <h1 className="title">LASH STUDIOS</h1>
        <p className="description">
          Accumsan mauris mattis pellentesque viverra fringilla a. Lectus placerat ornare
          volutpat donec tellus cursus senectus risus quam. Faucibus cursus amet.
        </p>
        <div className="btn-group">
          <button className="btn btn-start">Get Started</button>
          <button className="btn btn-contact">Contact Us</button>
        </div>
        
      </div>
    </div>
  );
};

export default IntroSection;
