import './App.css';
import React from 'react';

import java from './images/javaimg.png';
import htmlcss from './images/htmlcssimg.png';
import python from './images/pythonimg.png';
import c from './images/cimg.png';
import ruby from './images/rubyimg.png';
import js from './images/jsimg.png';
import github from './images/githubimg.png';
import react from './logo.svg';

function ProjectsMod() {

  //last updated
  var modiDate = new Date(document.lastModified);
  var x = modiDate.getMonth() + 1 + "/" + (modiDate.getDate()) + "/" + modiDate.getFullYear();

  var startDate = new Date(2019, 8, 17);
  var y = Math.floor((new Date() - startDate) / (1000*60*60*24));

  const languages = [java, htmlcss, python, c, ruby, js, github, react];
  const langs = languages.map((lang) => <li class = "inl"><img class = "pl" src={lang}></img></li>);

  return (
<div>
    <title>Brandon Kaminski - Projects</title>
    <div class = "header">
    <h1 id = "myname">Brandon Kaminski</h1>
    <h4 id = "subtext">Computer Scientist, Linguist, and Musician.</h4>
    </div>

    <div class = "main">

    <ul>
      {langs}
    </ul>

    <h2>Programming languages:</h2>
    <p> Fluent: Java, HTML, CSS <br/>
    Adept: Python, C, Ruby, JavaScript<br/>
  </p>
  <br/>

  <h2>Other Skills:</h2>
    <p> Databases: Some experience with MongoDB (including its Node.js framework) and Postman<br/>
   Some experience with <b>Python</b> libraries including Pandas, re, and NumPy</p>
   Currently learning various <b>JavaScript</b> frameworks including Node/Express, React, and React Native<br/>
  <br/>

<ul>
    <li class = "inl"><p id = "findme">Find me on GitHub! <br/> Click the logo!</p></li>
<li class = "inl"><a id = "githubref" href = "https://github.com/branmkam">
<img height = "100" src = {github}></img></a></li>
</ul>
    <p class = "proj">Projects Besides This Website:</p>

    <p class = "p50"><b>Comparing Economic Indicators and COVID-19 Numbers - </b> My project at the Carolina Data Challenge 2020, 
      created in a team of four. We <b>won</b> in our chosen category, Social Science! <br /> <br />
      This project compared various economic factors (such as GDP change and inflation rate) in many countries with 
      their tallies of COVID cases, deaths, and mortality rates to discover if the two were correlated; our results were a resounding no.
      Using what we could discern, we created a machine learning model using regression to predict COVID mortality rates across the world in 2021.
      My role in the project was utilizing the Python library Pandas to reorganize and consolidate data sets 
      for easy visualization, as well as being the main contributor to our accompanying website, linked below!
    </p>
    <p class = "viewcode"><a href = "https://github.com/Carolina-Data-Challenge/The-Fire-Ferrets" target = "_blank">View Code Here </a>
      <img height = "24" src = {python}></img> | <a href = "https://branmkam.github.io/The-Fire-Ferrets" target = "_blank">View Website Here </a> 
        <img height = "24" src = {htmlcss}></img></p>


    <p class = "p50"><b>pronounce.it - </b>  My project at HackNC 2019, created in a team of four. We were <b>runners-up</b> in 
    the "Best Beginner Hack" category, as well as Wolfram Award winners! <br/> <br/> pronounce.it is an Android app that
    utilizes native Google speech-to-text API to help users practice pronunciation of foreign languages. Broken into
    lessons: each lesson has sentences and notifies the user of which specific words they pronounced right or wrong. The wrong ones
    are cycled back to emphasize correct pronunciation. Read more on the Devpost page and the README file on GitHub!</p>
    <p class = "viewcode"><a href = "https://devpost.com/software/pronounce-it"  target = "_blank">View Code Here </a>
      <img height = "24" src = {java}></img></p>

      <p class = "p50"><b>The Kaminski Kasino - </b> An interactive casino built in Python beginning in summer 2019,
        with single-player blackjack and craps! I'm still working on the central interface to navigate
        between games.</p>
      <p class = "viewcode"><a href = "https://github.com/branmkam/KaminskiKasino" target = "_blank">View Code Here </a>
        <img height = "24" src = {python}></img></p>

    </div>
    <div class = "footer">
    <p id = "lastupdate">Last Updated: {x} | designed and coded by Brandon Kaminski | This site is {y} days old!</p>
    <p class = "reactP"><a target = "_blank" class = "react" href = "https://reactjs.org/"><img height = "16" class = "App-logo" src = {react}></img> React.js</a> powered since 10/28/2020
    </p>
    </div>
  </div>
  );
}

export default ProjectsMod;
