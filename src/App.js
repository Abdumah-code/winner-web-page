import React, { useState } from 'react';
import Header from './components/Headder';
import IntroSection from './components/IntroSection';
import PopularCategories from './components/PopularCategories';
import NewProducts from './components/NewProducts';
import Footer from './components/footer';
import ServiceBooking from './components/ServiceBooking';


function App() {
    const [language, setLanguage] = useState('En');
    const [currentPage, setCurrentPage] = useState('home');

    const renderPage = () => {
        switch (currentPage) {
          case 'services':
            return <ServiceBooking language={language} />;
          // Add cases for other pages if needed
          default:
            return (
              <>
                <IntroSection language={language} />
                <PopularCategories language={language} />
                <NewProducts language={language} />
              </>
            );
        }
      };

      return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage} setCurrentPage={setCurrentPage} />
            {renderPage()}
            <Footer language={language} />
        </div>
    );
}

export default App;
