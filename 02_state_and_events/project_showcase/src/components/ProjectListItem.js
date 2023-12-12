import { useState } from 'react'

const ProjectListItem = ({ id, about, image, link, name, phase }) => {

  //1. import the useState hook
  //2. define the state and setter function with the initial value
  //3. in JSX, add the clapCount state
  //4. add onClick event with the event handler 
  //5. define the event handler
  //6. Trigger the setter function with the new value => re-render => Dom manipulation

  const [ clapCount, setClapCount ] = useState(0)

  function handleClap(){

    const newClapCount = clapCount + 1
    setClapCount(newClapCount)
    
    console.log(newClapCount)
  }
  return (
    <li className="card">
      <figure className="image">
        <img src={image} alt={name} />
        <button className="claps" onClick={handleClap}>👏{clapCount}</button>
      </figure>

      <section className="details">
        <h4>{name}</h4>
        <p>{about}</p>
        {link ? (
          <p>
            <a href={link}>Link</a>
          </p>
        ) : null}
      </section>

      <footer className="extra">
        <span className="badge blue">Phase {phase}</span>
      </footer>
    </li>
  );
};

export default ProjectListItem;
