// src/components/ThemeSwitcher.js
import React, { useState, useEffect } from 'react';
import "../ThemeSwitcher.css"

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedMode = JSON.parse(localStorage.getItem("dark-mode"));
        if (savedMode) {
            setDarkMode(savedMode);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("dark-mode", darkMode);
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.dataset.darkMode = true;
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.dataset.darkMode = false;
        }
    }, [darkMode]);

    const handleToggle = () => {
        setDarkMode(!darkMode);
    };

    return (
        <label htmlFor="dark-mode">
            <div className="switch">
                <input
                    id="dark-mode"
                    type="checkbox"
                    checked={darkMode}
                    onChange={handleToggle}
                />
                <div className="insetcover">
                    <div className="sun-moon sun"></div>
                    <div className="sun-moon moon"></div>
                    <div className="stars"></div>
                </div>
                <div className="sun-moon-shadow"></div>
                <div className="shadow-overlay"></div>
            </div>
        </label>
    );
};

export default ThemeSwitcher;
