import React, { useState } from 'react';
import Header from './components/Headder';
import IntroSection from './components/IntroSection';
import PopularCategories from './components/PopularCategories';
import NewProducts from './components/NewProducts';
import Footer from './components/footer'


function App() {
    const [language, setLanguage] = useState('En');

    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage} />
            <IntroSection language={language} />
            <PopularCategories language={language} />
            <NewProducts language={language} />
            <Footer language={language} />
        </div>
    );
}

export default App;
