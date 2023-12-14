import "./About.css"
import { useState, useEffect } from "react";

function About() {
  // create state to hold about data
  const [about, setAbout] = useState(null);

  // create function to make api call
  const getAboutData = async () => {

		// make api call and get response
    const response = await fetch("/about.json");
console.log(response)
		// turn response into javascript object
    const data = await response.json();
    console.log(data)

		// set the about state to the data
    setAbout(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => { getAboutData() } , []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => (
    <div> 
      <img src={about.headshot} alt="picture of sadie" />
      <h2 id="name">{about.name}</h2>
      <h3 id= "email">{about.email}</h3>
      <p id = "bio">{about.bio}</p> 
      

        
      <a href={`${about.resume}`} target="_blank" rel="noopener noreferrer">
        <button>resume</button>
        </a>
        {/* <a id="email"href="mailto:your.sadiefiss@gmail.com">Contact me via Gmail</a>
<button>Contact Me via Email!</button> */}
    </div>
  );

  // if data arrives return the result of loaded, if not, an h1 that says loading
  return about ? loaded() : <h1>Loading...</h1>;
}

export default About;