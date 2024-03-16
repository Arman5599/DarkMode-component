import React, { useState, useEffect } from 'react';


const DarkMode = () => {
  const initialDarkMode = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    // Update localStorage when darkMode changes
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark");
  };
  return (
    <div className={`app ${darkMode}`}>
      
      <button onClick={toggleMode}>Toggle Theme</button>
    </div>
  );
};

export default DarkMode