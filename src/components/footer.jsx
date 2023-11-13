import React from 'react';
import './Footer.scss';
import 'font-awesome/css/font-awesome.min.css';

const Footer = ({ language }) => {
  const content = {
    En: {
      linksTitle: 'Links',
      servicesTitle: 'Services',
      newsletterTitle: 'Newsletter',
      links: ['Home', 'About', 'Services', 'Contact'],
      services: ['Kommer Snart', 'Kommer Snart', 'Kommer Snart', 'Kommer Snart'],
      copyright: '© 2023 AM Webbutecklings AB',
      subscribe: 'Subscribe',
    },
    Se: {
      linksTitle: 'Länkar',
      servicesTitle: 'Tjänster',
      newsletterTitle: 'Nyhetsbrev',
      links: ['Hem', 'Om Oss', 'Tjänster', 'Kontakt'],
      services: ['Kommer Snart', 'Kommer Snart', 'Kommer Snart', 'Kommer Snart'],
      copyright: '© 2023 AM Webbutecklings AB',
      subscribe: 'Prenumerera',
    }
  };

  const { linksTitle, servicesTitle, newsletterTitle, links, services, copyright, subscribe } = content[language];

  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="index.html" className="footer-logo">
          <div className="logo">
            <div className="logo-winner">WINNER</div>
            <div className="logo-lash-studios">LASH STUDIOS</div>
          </div>
        </a>

        <div className="social-media-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa fa-facebook-f"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i className="fa fa-instagram"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa fa-youtube"></i></a>
        </div>

        <div className="footer-links">
          <div className="links">
            <strong>{linksTitle}</strong>
            {links.map((link, idx) => <a href={'/' + link.toLowerCase()} key={idx}>{link}</a>)}
          </div>
          <div className="services">
            <strong>{servicesTitle}</strong>
            {services.map((service, idx) => <a href={'/' + service.toLowerCase().replace(/\s+/g, '-') } key={idx}>{service}</a>)}
          </div>
          <div className="newsletter">
            <strong>{newsletterTitle}</strong>
            <div className="input-group">
              <input type="email" placeholder="Email" />
              <button>{subscribe}</button>
            </div>
          </div>

        </div>
      </div>
      <div className="footer-bottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
