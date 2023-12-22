import React from "react";
import { Link } from "react-router-dom"

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  const buttonTextContent = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <header>
      <nav>
        <h1 className="branding">
          <span className="logo">{"//"}</span>
          Project Showcase
        </h1>
        <div className="navigation">
          <Link 
            className="button" 
            to="/projects">
            All Projects
          </Link>
          <Link 
            className="button" 
            to="/projects/new">
            Add Project
          </Link>
          <button onClick={onToggleDarkMode}>{buttonTextContent}</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
