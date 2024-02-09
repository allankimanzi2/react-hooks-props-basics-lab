import React from "react";
import Links from "./Links";
import About from "./About";  // Import the About component

function AboutMe(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio !== '' && props.bio ? <p>{props.bio}</p> : null}
      <About imageSrc={props.image} aboutText={props.bio} />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default AboutMe;
