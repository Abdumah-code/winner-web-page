import React, { useState } from 'react';
import Header from './components/Headder';
import IntroSection from './components/IntroSection';
import PopularCategories from './components/PopularCategories';

function App() {
    const [language, setLanguage] = useState('En');

    return (
        <div className="App">
            <Header language={language} setLanguage={setLanguage} />
            <IntroSection language={language} />
            <PopularCategories language={language} />
        </div>
    );
}

export default App;
