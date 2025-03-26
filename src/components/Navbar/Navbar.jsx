import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false); // Staat van dark mode
    const imgRef = useRef(null); // Ref voor de afbeelding

    const handleLinkClick = () => {
        const checkbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = false;
        }
    };

    const toggleDarkMode = (e) => {
        e.preventDefault(); // Voorkom standaard navigatiegedrag
        setIsDarkMode(!isDarkMode); // Wissel de dark mode status om
        if (!isDarkMode) {
            document.body.classList.add('dark-mode'); // Voeg dark-mode klasse toe
            if (imgRef.current) {
                imgRef.current.src = "/icons/Vector-dark.svg"; // Verander naar dark mode afbeelding
            }
        } else {
            document.body.classList.remove('dark-mode'); // Verwijder dark-mode klasse
            if (imgRef.current) {
                imgRef.current.src = "/icons/Vector.svg"; // Verander naar light mode afbeelding
            }
        }
    };

    return (
        <>
            {/* Dark mode toggle knop */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                <img ref={imgRef} src="/icons/Vector.svg" alt="Dark Mode Toggle" />
            </button>
            <label className="hamburger-menu">
                <input type="checkbox" />
            </label>
            
            <aside className="sidebar">
                <nav>  
                    <ul>
                        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
                        <li><Link to="/About" onClick={handleLinkClick}>About me</Link></li>
                        <li><Link to="/Projects" onClick={handleLinkClick}>Projects / Blog</Link></li>
                        {/* <li><Link to="/Blog" onClick={handleLinkClick}>Blog</Link></li> */}
                        <li><Link to="/Contact" onClick={handleLinkClick}>Contact</Link></li>
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default NavBar;
