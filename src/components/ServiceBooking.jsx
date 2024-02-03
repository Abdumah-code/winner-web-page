import React, { useState } from 'react';
import servicesList from './ServicesList';
import './ServiceBooking.scss';

const ServiceBooking = ({ language }) => {
  const [expandedGroups, setExpandedGroups] = useState({});

  const groupedServices = servicesList.reduce((acc, service) => {
    (acc[service.category] = acc[service.category] || []).push(service);
    return acc;
  }, {});

  const toggleGroup = (category) => {
    setExpandedGroups(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="service-booking">
      <h1>{language === 'En' ? 'Our Services' : 'Våra Tjänster'}</h1>
      <div className="service-headers">
        <span className="header-name">{language === 'En' ? 'Service' : 'Tjänst'}</span>
        <span className="header-duration">{language === 'En' ? 'Duration' : 'Varaktighet'}</span>
        <span className="header-price">{language === 'En' ? 'Price' : 'Pris'}</span>
        <span className="header-book">{language === 'En' ? 'Book' : 'Boka'}</span>
      </div>
      {Object.keys(groupedServices).map(category => (
        <div key={category} className="service-group">
          <button className="service-group-title" onClick={() => toggleGroup(category)}>
            {category}
            <span className="toggle-icon">
              {expandedGroups[category] ? '-' : '+'}
            </span>
          </button>
          <div className={`service-list ${expandedGroups[category] ? 'expanded' : 'collapsed'}`}>
            {groupedServices[category].map(service => (
              <div key={service.name} className={`service-item ${service.unavailable ? 'unavailable' : ''}`}>
                <h2>{service.name}</h2>
                <p>{service.duration}</p>
                <p>{service.price}</p>
                <button disabled={service.unavailable}>
                  {language === 'En' ? 'Book' : 'Boka'}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceBooking;
