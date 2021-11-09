import { useState, useEffect } from "react";


const About = props => {

  // create state to hold "about" data
  const [about, setAbout] = useState(null);

  // create function to make API call
  const getAboutData = async () => {
    const response = await fetch(props.URL + "about");
    const data = await response.json();
    console.log(data);
    setAbout(data);
  }

  // make an initial call for the data inside a useEffect hook, so it only happens once here
  useEffect(() => getAboutData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return (
      <div>
        <h2>{about.name}</h2>
        <img src={about.headshot} alt={`headshot of ${about.name}`} width={400} />
        <h3>Email: <a href={`mailto:${about.email}`}>{about.email}</a></h3>
        <h3>How {about.name.split(" ")[0]} came to be:</h3>
        <p>{about.bio}</p>
      </div>
    )
  };

  // if data arrives return the result of loaded(). If not, return an h1 that says "Loading..."
  return (
      about ? loaded() : <h1>Loading...</h1>
    );
}



export default About;
