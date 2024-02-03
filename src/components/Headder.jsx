import React, { useState } from 'react';
import './Header.scss';

const Header = ({ language, setLanguage, setCurrentPage }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const SearchText = {
        En: "Search",
        Se: "Sök"
    };

    const navLinks = {
        En: ['Home', 'About', 'Products', 'Services'],
        Se: ['Hemma', 'Om oss', 'Produkter', 'Tjänster'],
    };

    const handleSearch = () => {
        console.log(`Searching for: ${searchTerm}`);
    };

    const handleNavClick = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="header">
            <a href="#home" onClick={() => handleNavClick('home')}>
                    <div className="logo">
                    <div className="logo-winner">WINNER</div>
                    <div className="logo-lash-studios">LASH STUDIOS</div>
                </div>
            </a>

            <div className="search-container">
                <input 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder={SearchText[language]}
                />
                <button onClick={handleSearch}>🔍</button>
            </div>

            <nav className="nav-links">
            {navLinks[language].map((link, idx) => (
                    <button
                        onClick={() => handleNavClick(link.toLowerCase())}
                        key={idx}
                        className="nav-button"
                    >
                        {link}
                    </button>
                ))}
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