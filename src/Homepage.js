import './App.css';
import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';

import java from './images/javaimg.png';
import htmlcss from './images/htmlcssimg.png';
import python from './images/pythonimg.png';
import c from './images/cimg.png';
import ruby from './images/rubyimg.png';
import js from './images/jsimg.png';
import github from './images/githubimg.png';
import react from './logo.svg';
import americle from './images/americle.png';

function Homepage() {

  const languages = [java, htmlcss, python, c, ruby, js, github, react];
  const langs = languages.map((lang) => <li class = "inl"><img class = "pl" src={lang}></img></li>);

  return (
    <div>
      <div id = "mainhome" class = "main">
          <h1 id = "welcome">Welcome!</h1>
        <p id = "start">Rising Senior at UNC-Chapel Hill.<br/>Programmer. | Language Enthusiast.<br/>
          Pianist. | Writer. | And More!</p>
        <h2>Try my newest project, my spin on Wordle:</h2>
        <p><a target="blank" href="https://branmkam.github.io/americle"><img height = "100" src={americle}/></a></p>
      </div>
    </div>
  );
}

export default Homepage;
