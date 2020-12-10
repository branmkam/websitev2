import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import myheadshot from './images/myHeadshot.jpg';
function AboutMod() {

  return (
<div>
  <title>Brandon Kaminski - Contact</title>
    <div class = "main">
      <img id = "headshot" src = {myheadshot} height = "200"></img>
      <br/>
      <h2>About Me: Who Am I?</h2>
      <p>I am currently a sophomore at the University of North Carolina - Chapel Hill,
         double majoring in Computer Science, BS, and Linguistics, BA.</p>
      <p>As a musician, I'm a pianist, composer, and producer. It's been mostly for fun so far,
      but I'm planning on releasing an album once I am able to record some of my songs. </p>
      <p>I study foreign languages for fun. I can speak Spanish fluently, Italian proficiently, and have studied
          Portuguese, German, and French on and off throughout the past few years. I've also learned bits and pieces of some
      other languages from friends who speak them or by using Duolingo.</p>
         <p>To see my computer science projects, click on the "My Projects" tab!</p>
    <br />
      <h2>Experience</h2>
      <h3>Download my resume! <Link to="/files/ResumeBrandonKaminski.pdf" target="_blank" download>(.pdf)</Link> or <Link to="/files/ResumeBrandonKaminski.docx" target="_blank" download> (.docx)</Link> | <a href = "https://www.linkedin.com/in/brandon-kaminski-86580a19a/" target = "_blank">View my LinkedIn profile!</a></h3>
      <p></p>
   </div>
  </div>
  );
}

export default AboutMod;