import { useState, useEffect } from "react";


const Projects = props => {

  // state to hold props
  const [projects, setProjects] = useState(null);

  // function to make API call
  const getProjectsData = async () => {
    const response = await fetch(props.URL + "projects");
    const data = await response.json();
    setProjects(data);
  }

  // initial call for data inside useEffect, so it happens once
  useEffect(() => getProjectsData(), []);
  
  // function that returns JSX needed once data is fetched
  const loaded = () => {
    return projects.map(project => {
      return (
        <div>
          <h1>{project.name}</h1>
          <img src={project.img} alt={`screenshot of ${project.name}`} />
          <a href={project.git}>
            <button>Github</button>
          </a>
          <a href={project.live}>
            <button>Live site</button>
          </a>
        </div>
      )
    })
  }

  return projects ? loaded() : <h1>Loading...</h1>
}


export default Projects;
