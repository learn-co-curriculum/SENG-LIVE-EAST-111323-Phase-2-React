import React, { useState } from "react";

const ProjectForm = ( { onAddProject }) => {

  const initialForm = {
    name: "",
    about: "",
    phase: 0,
    link: "",
    image: ""
  }
  
  const [ formData, setFormData ] = useState(initialForm)

  const handleOnChange = (e) => {
    console.log(e.target)
    console.log(e.target.name)
    console.log(e.target.value)

    //object de-structuring
    const { name, value } = e.target

    console.log(name, value)

    // setFormData((formData) => ({
    //   ...formData, ///spread the previous data 
    //   [name]: value // add the new name and the value of the input 
    // })) //why using the square bracket? bc this is the key

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch("http://localhost:4000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => console.log(data)) //pessimistic rendering: using the response back from the server

    onAddProject(formData) //optimistic. why? it's not using the response back from the server
    //formData is the new project 

    //clear the form
    setFormData(initialForm)

  }

  console.log(formData)
  return (
    <section>
      <form className="form" autoComplete="off" onSubmit={handleSubmit}>
        <h3>Add New Project</h3>

        <label htmlFor="name">Name</label>
        <input 
            type="text" 
            id="name" 
            name="name" 
            onChange={handleOnChange}
            value={formData.name}/>

        <label htmlFor="about">About</label>
        <textarea 
            id="about" 
            name="about"
            onChange={handleOnChange} 
            value={formData.about}/>

        <label htmlFor="phase">Phase</label>
        <select 
            name="phase" 
            id="phase"
            onChange={handleOnChange}
            value={formData.phase}>
          <option>Select One</option>
          <option value="1">Phase 1</option>
          <option value="2">Phase 2</option>
          <option value="3">Phase 3</option>
          <option value="4">Phase 4</option>
          <option value="5">Phase 5</option>
        </select>

        <label htmlFor="link">Project Homepage</label>
        <input 
          type="text" 
          id="link" 
          name="link" 
          onChange={handleOnChange}
          value={formData.link}/>

        <label htmlFor="image">Screenshot</label>
        <input 
          type="text" 
          id="image" 
          name="image" 
          onChange={handleOnChange}
          value={formData.image}/>

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
};

export default ProjectForm;
