import React, { useState, useEffect } from "react"; //1. import useEffect
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  console.log(" ------ component rendering ----- ")
  
  useEffect(() => { //2. callback function as the first argument for the useEffect hook
    console.log(" ------ side effect, useEffect rendering ----- ")
    fetch("http://localhost:4000/projects")
      .then(response => response.json())
      .then(data => setProjects(data))
  }, []) //3. add an empty dependency array here as the second argument 

  // const Timer = () => {
  //   const [ count, setCount ] = useState(0)

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setCount((prev) => prev + 1)
  //     }, 1000)

  //     return () => {
  //       clearTimeout(timer)
  //     }
  //   })
  // }

  const onAddProject = ( newProject ) => {
    setProjects([...projects, newProject])
    //spread operator is to add the old projects array and the new project 
  }


  const onToggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      <ProjectForm onAddProject = { onAddProject }/>
      {/* <button onClick={handleClick}>Load Projects</button> */}
      <ProjectList projects={projects} />
    </div>
  );
};

export default App;
