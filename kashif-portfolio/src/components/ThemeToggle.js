import React, { useState } from 'react';

function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark-mode'); 
    };

    return (
        <button className="btn theme-toggle ms-3" onClick={toggleTheme}>
            <i className={`fas ${isDarkMode ? 'fa-sun' : 'fa-moon'}`}></i>
        </button>
    );
}

export default ThemeToggle;