import React from 'react';
import Slider from 'react-slick';
import './IntroSection.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const IntroSection = ({ language }) => {

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

  const descriptions = {
    En: "Winner was established in 2020, and Winnie Lash Studios began in 2023. Today, we're a wholesale business specializing in eyelash extensions. Our goal is to ensure customer satisfaction by providing high-quality products at lower prices and maintaining good customer relations. Our dedicated staff works hard to meet customer needs. We're constantly innovating, improving, and expanding our selection with the latest market offerings. We promote and use the products ourselves. We hope you choose Winnie Lash Studios!",
    Se: "Winner grundades 2020 och Winnie Lash Studios startade 2023. Idag är vi ett grossistföretag som specialiserar sig på fransförlängningar. Vårt mål är att säkerställa kundnöjdhet genom att erbjuda högkvalitativa produkter till lägre priser och att upprätthålla goda kundrelationer. Vår engagerade personal arbetar hårt för att möta kundernas behov. Vi är ständigt nyskapande, förbättrar och utökar vårt urval med de senaste produkterna på marknaden. Vi marknadsför och använder produkterna själva. Vi hoppas att du väljer Winnie Lash Studios!"
  };

  const btnGetStartedText = {
    En: "Get Started",
    Se: "Börja Blädra"
  };

  const btnContactText = {
    En: "Contact Us",
    Se: "Kontakta Oss"
  };

  return (
    <div className="intro-section">
      <div className="intro-bg">
        <Slider {...settings}>
          <div>
            <img src="/wow.jpg" alt="Lash Studio Background 1" />
          </div>
          <div>
            <img src="/tow.jpg" alt="Lash Studio Background 2" />
          </div>
          <div>
            <img src="/off.jpg" alt="Lash Studio Background 3" />
          </div>
        </Slider>
      </div>
      <div className="intro-content">
      <h2 className="brand-name">Winner</h2>
        <h1 className="title">LASH STUDIOS</h1>
        <p className="description">
          {descriptions[language]}
        </p>
        <div className="btn-group">
          <button className="btn btn-start">{btnGetStartedText[language]}</button>
          <button className="btn btn-contact">{btnContactText[language]}</button>
        </div>
        
      </div>
    </div>
  );
};

export default IntroSection;
