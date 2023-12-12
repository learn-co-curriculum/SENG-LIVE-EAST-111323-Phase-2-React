import React, { useState } from "react";

  //1. when the button gets clicked, triggers event handler
  //2. use the setter function, update the state
  //3. re-render the component
  //4. render with the new text content 
  //       dark mode -> light mode
  //       light mode -> dark mode

const Header = () => {

  const [ isDarkMode, setIsDarkMode ] = useState(false)

  //#2. write the event handler logic 
  function handleToggle(){
    setIsDarkMode(!isDarkMode) 
    //setter function updates the state
    //isDarkMode === false 
    //isDarkMode === true  
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggle}> {isDarkMode? `Dark Mode`: `Light Mode`}</button>
      {/* #1. ADD an event, event handler to the DOM element
      - add an onClick event to the button element 
      - pass that onClick event to an event handler function called handleToggle
      - naming convention : handle + action verb */}
    </header>
  );
}

export default Header;
