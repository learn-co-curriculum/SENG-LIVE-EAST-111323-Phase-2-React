import { useEffect, useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import ProjectEditForm from "./components/ProjectEditForm";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/projects")
      .then((resp) => resp.json())
      .then((projects) => setProjects(projects));
  }, []);

  const onToggleDarkMode = () => {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  };

  const onAddProject = (newProj) => {
    setProjects((projects) => [...projects, newProj]);
  };

  const completeEditing = () => {
    setProjectId(null);
  };

  const enterProjectEditModeFor = (projectId) => {
    setProjectId(projectId);
  };

  const onEditingProject = (editedProject) => {

    // forEach, map, filter
    //1. need to find the selected project in the state, projects
    //2. replace that project with th newly edited project
    //3 update the whole project state using the setter function

    //projects [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    const editedProjects = projects.map((project) => {
      //console.log("project.id", project.id,  "===", "editedProject.id", editedProject.id)
      if(project.id === editedProject.id ){
        //console.log("edited")
        return editedProject //replace the project with the newly edited project
      }else{
        return project //keep the original project
      }
    })
    //console.log(editedProjects)

    setProjects(editedProjects)
  }

  const onDeleteProject = (deletedProjectId) => {

    //1. we have to iterate the projects, get each project .map? .forEach? .filter?
    //2. if one project's id matches the deletedId, then we want to tke that off
    //3. continue iterate 
    //4. we need an array without the matching project 
    //5. setter function with the new array to update the state

    const woDeleted = projects.filter((project)=> {
      return project.id !== deletedProjectId
    })

    setProjects(woDeleted)


  }

  const renderForm = () => {
    if (projectId) {
      return (
        <ProjectEditForm
          projectId={projectId}
          completeEditing={completeEditing}
          onEditingProject={onEditingProject}
          onDeleteProject={onDeleteProject}
        />
      );
    } else {
      return <ProjectForm onAddProject={onAddProject} />;
    }
  };

  return (
    <div className={isDarkMode ? "App" : "App light"}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
      {renderForm()}
      <ProjectList
        projects={projects}
        enterProjectEditModeFor={enterProjectEditModeFor}
        onDeleteProject={onDeleteProject}
      />
    </div>
  );
};

export default App;
