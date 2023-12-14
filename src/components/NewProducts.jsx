import React from 'react';
import './NewProducts.scss';

const NewProducts = ({ language }) => {
  // code for Github
  const productsInfo = {
    En: [
      { name: './8D-exaple.png', desc: 'U/DD bent', price: 1235 },
      { name: './8D-exaple.png', desc: 'U/DD bent', price: 1235 },
      { name: './8D-exaple.png', desc: 'U/DD bent', price: 1235 },
      { name: './8D-exaple.png', desc: 'U/DD bent', price: 1235 },
      { name: './8D-exaple.png', desc: 'U/DD bent', price: 1235 },
      { name: './8D-exaple.png', desc: 'U/DD bent', price: 1235 },
    ],
    Se: [
      { name: './8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
      { name: './8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
      { name: './8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
      { name: './8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
      { name: './8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
      { name: './8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
    ],
  };

  //code for Computer
  // const productsInfo = {
  //   En: [
  //     { name: '/8D-exaple.png', desc: 'U/DD bent', price: 1235 },
  //     { name: '/8D-exaple.png', desc: 'U/DD bent', price: 1235 },
  //     { name: '/8D-exaple.png', desc: 'U/DD bent', price: 1235 },
  //     { name: '/8D-exaple.png', desc: 'U/DD bent', price: 1235 },
  //     { name: '/8D-exaple.png', desc: 'U/DD bent', price: 1235 },
  //     { name: '/8D-exaple.png', desc: 'U/DD bent', price: 1235 },
  //   ],
  //   Se: [
  //     { name: '/8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
  //     { name: '/8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
  //     { name: '/8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
  //     { name: '/8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
  //     { name: '/8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
  //     { name: '/8D-exaple.png', desc: 'U/DD böjd', price: 12350 },
  //   ],
  // };

  const buttonText = {
    En: { getStarted: 'Get Started', seeAll: 'See All' },
    Se: { getStarted: 'Börja', seeAll: 'Se Alla' },
  };

  const convertCurrency = (price, lang) => {
    const rate = lang === 'Se' ? 10 : 1;
    return price * rate;
  };

  return (
    <div className="new-products">
      <h2>{language === 'En' ? 'New Products' : 'Nya Produkter'}</h2>
      <p>{language === 'En' ? 'Discover our latest range of premium lashes.' : 'Upptäck vårt senaste sortiment av premiumfransar.'}</p>
      <div className="product-grid">
        {productsInfo[language].map((product, index) => (
          <div key={index} className="product-card">
            (change to the point when testing onnGithub)
            <img src={`./8D-exaple.png`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.desc}</p>
            <p>{`${convertCurrency(product.price, language)} ${language === 'En' ? '€' : 'kr'}`}</p>
          </div>
        ))}
      </div>
      <div className="actions">
        <button className="btn-start">{buttonText[language].getStarted}</button>
        <button className="btn-see-all">{buttonText[language].seeAll}</button>
      </div>
    </div>
  );
};

export default NewProducts;
