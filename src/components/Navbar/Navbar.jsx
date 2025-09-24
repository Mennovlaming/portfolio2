import React, { useState, useRef } from "react";
import { HashLink } from "react-router-hash-link";

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const imgRef = useRef(null);

  const handleLinkClick = () => {
    const checkbox = document.getElementById("hamburger-checkbox");
    if (checkbox) checkbox.checked = false;
  };

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
      if (imgRef.current) imgRef.current.src = "/icons/Vector-dark.svg";
    } else {
      document.body.classList.remove("dark-mode");
      if (imgRef.current) imgRef.current.src = "/icons/Vector.svg";
    }
  };

  return (
    <nav>
      <input type="checkbox" id="hamburger-checkbox" className="hamburger-checkbox" />
      <label htmlFor="hamburger-checkbox" className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <aside className="sidebar">
        <ul>
          <li>
            <HashLink smooth to="/#home" onClick={handleLinkClick}>Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#about" onClick={handleLinkClick}>About me</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#projects" onClick={handleLinkClick}>Projects / Blog</HashLink>
          </li>
          <li>
            <HashLink smooth to="/#contact" onClick={handleLinkClick}>Contact</HashLink>
          </li>
        </ul>
      </aside>

      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <img ref={imgRef} src="/icons/Vector.svg" alt="Dark Mode Toggle" />
      </button>
    </nav>
  );
};

export default NavBar;
