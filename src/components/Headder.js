import React, { useState } from 'react';
import './style.scss';
// import britishFlag from './1.png';
// import swedishFlag from './197564 (1).png';

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [language, setLanguage] = useState('En');

    const navLinks = {
        En: ['Home', 'About', 'Gallery', 'News'],
        Se: ['Hemma', 'Om oss', 'Galleri', 'Nyheter'],
    };

    const handleSearch = () => {
        console.log(`Searching for: ${searchTerm}`);
    };

    return (
        <div className="header">
            <div className="logo">
                <div className="logo-winner">WINNER</div>
                <div className="logo-lash-studios">LASH STUDIOS</div>
            </div>

            <div className="search-container">
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search"
                />
                <button onClick={handleSearch}>🔍</button>
            </div>

            <nav className="nav-links">
                {navLinks[language].map((link, idx) => <a href={'/' + link.toLowerCase()} key={idx}>{link}</a>)}
            </nav>

            <div className="icons">
                <i className="cart-icon">🛒</i>
                <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="En">En</option>
                    <option value="Se">Se</option>
                </select>
            </div>
        </div>
    );
}

export default Header;