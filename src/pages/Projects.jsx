import { useState, useEffect } from "react";
import { Button } from "react-bulma-components";


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
        <div style={{marginTop: "3em"}}>
          <h1 className="title is-3">{project.name}</h1>
          <a href={project.live}>
            <img src={project.image} alt={`screenshot of ${project.name}`} width={400} />
          </a>
          <br />
          <a href={project.git}>
            <Button mt="3" color="link is-light">Github</Button>
          </a>
          <a href={project.live}>
            <Button mt="3" ml="5" color="link">Live Site</Button>
          </a>
        </div>
      )
    })
  }

  return projects ? loaded() : <h1>Loading...</h1>
}


export default Projects;
