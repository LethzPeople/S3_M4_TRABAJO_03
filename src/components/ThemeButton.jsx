import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors duration-300"
    >
      {darkMode ? (
        <>
          <span>☀️</span>          
        </>
      ) : (
        <>
          <span>🌙</span>          
        </>
      )}
    </button>
  );
};

export default ThemeButton;