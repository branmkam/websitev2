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

  const languages = [java, htmlcss, python, js, github, react];
  const langs = languages.map((lang) => <li class = "inl"><img class = "pl" src={lang}></img></li>);

  return (
<div>
    <title>Brandon Kaminski - Projects</title>
    <div class = "main">

    <ul>
      {langs}
    </ul>

    <h2>Programming languages:</h2>
    <p> Fluent: Python, HTML, CSS, Java<br/>
    Near-Fluent: JavaScript<br/>
  </p>
  <br/>

  <h2>Other Skills:</h2>
    <p> Databases: Some experience with <b>MongoDB</b> (including its Node.js framework) and Postman<br/>
   Ample experience with <b>Python</b> data libraries including <b>Pandas, re, NumPy, and SpaCy</b><br/>
   Some experience with creating and running neural networks using <b>PyTorch</b><br/>
   Some experience with various <b>JavaScript</b> frameworks including <b>Node/Express, React, and React Native</b><br/>
   Currently taking <b>SQL</b> course on Codecademy to provide additional knowledge of database querying</p>
  <br/>

<ul>
    <li class = "inl"><p id = "findme">Find me on GitHub! <br/> Click the logo!</p></li>
<li class = "inl"><a id = "githubref" href = "https://github.com/branmkam">
<img height = "100" src = {github}></img></a></li>
</ul>
    <p class = "proj">Projects Besides This Website:</p>

    <p class = "p50"><b>Americle - </b> This game was built in May 2022 to join in the Wordle craze. Like its inspirations <a target="blank" href="https://globle-game.com">Globle </a>  
    and <a target="blank" href="https://semantle.com">Semantle</a>, it is based on distance. 
    The user has to identify a target US city by guessing other US cities, utilizing their distances away from the target city 
    to correctly identify the target with the least number of guesses. <b>Built using the Leaflet map framework in JavaScript supplemented by vanilla HTML, CSS, and JavaScript.</b>
    </p>
    <p class = "viewcode">
    <a href = "https://github.com/branmkam/americle" target = "_blank">
      View Code Here </a> | <a href = "https://branmkam.github.io/americle" target = "_blank">View Website Here </a>
        <img height = "24" src = {htmlcss}></img><img height = "24" src = {js}></img></p>

    <p class = "p50"><b>TuneSpot - </b> This game was built as a final project for a web development class in April-May 2021, but is available for anyone to play! 
    This app combines name-that-tune with the vast playlist libraries of Spotify. Pick any playlist, play with friends, and beat high scores as you test your music knowledge! 
    <b> Built with React and Spotify API.</b>
    </p>
    <p class = "viewcode">
      <a href = "https://branmkam.github.io/tunespot" target = "_blank">View Website Here </a>
        <img height = "24" src = {htmlcss}></img><img height = "24" src = {js}></img><img height = "24" src = {react}></img></p>

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
